import React, { useContext, useState } from 'react'
import { ContentContext } from 'components/App'
import { getWizardLocations } from 'api'

interface Props {
  onFormChange: (name: string, value: string) => void
  changeScreen: (screen: number) => void
  currentScreen: number
  locationType: string
  location: string
  attribute: string
}

export const LocationAttribute: React.FC<Props> = ({
  onFormChange,
  changeScreen,
  currentScreen,
  locationType,
  location,
  attribute
}) => {
  const { exploreTheData } = useContext(ContentContext)
  const wizard = exploreTheData?.wizard
  const geos = wizard?.geos

  const [locations, setLocations] = useState([])

  const progress = {
    width: (currentScreen / 4) * 100 + '%'
  }

  const onLocationTypeChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onFormChange('locationType', e.target.value)
    try {
      const result = await getWizardLocations(e.target.value.toLowerCase())
      setLocations(result)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="location-attribute-container">
      <p>Pick a location and attribute</p>
      <div className="locations">
        <select
          className="custom-select location-type-select"
          onChange={e => onLocationTypeChange(e)}
          value={locationType}
        >
          <option value={''}>All...</option>
          {geos &&
            geos.map((geo, idx) => {
              return (
                <option value={geo} key={geo}>
                  {geo}
                </option>
              )
            })}
        </select>
        <select
          className="custom-select location-select"
          onChange={e => onFormChange('location', e.target.value)}
          value={location}
          disabled={!locationType}
        >
          {locations &&
            locations.map((loc, idx) => {
              return (
                <option value={loc} key={loc}>
                  {loc}
                </option>
              )
            })}
        </select>
      </div>
      <div className="attributes">
        <select
          className="custom-select attribute-select"
          onChange={e => onFormChange('attribute', e.target.value)}
          disabled={!locationType || !location}
          value={attribute}
        >
          <option value={''}>Compare attributes</option>
          <option value={'bedrooms'}>Bedrooms</option>
          <option value={'price'}>Price</option>
        </select>
      </div>
      <div className="continue">
        <button
          className="btn btn-primary"
          disabled={!locationType || !location || !attribute}
          onClick={() => changeScreen(currentScreen + 1)}
        >
          Continue
        </button>
        <div className="progress">
          <div
            className="progress-bar bg-primary"
            role="progressbar"
            style={progress}
            aria-valuenow={currentScreen / 4}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
        <img
          src={'./static/icons/arrow-left.svg'}
          alt="back-arrow"
          className="wizard-back-btn"
          onClick={() => changeScreen(currentScreen - 1)}
        />
      </div>
    </div>
  )
}
