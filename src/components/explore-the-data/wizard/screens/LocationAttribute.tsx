import React, { useContext, useState } from 'react'
import { ContentContext } from 'components/App'
import { getWizardLocations } from 'api'

interface Form {
  industry: string
  locationType: string
  location: string
  attribute: string
  role: string
  usesIndexTool: string
}

interface Props {
  onFormChange: (form: Form) => void
  changeScreen: (screen: number) => void
  currentScreen: number
  form: Form
}

export const LocationAttribute: React.FC<Props> = ({
  onFormChange,
  changeScreen,
  currentScreen,
  form
}) => {
  const { exploreTheData } = useContext(ContentContext)
  const [locations, setLocations] = useState([])
  const [text, setText] = useState('')
  const [suggestions, setSuggestions] = useState<string[]>([])

  const wizard = exploreTheData?.wizard
  const geos = wizard?.geos
  const attributes = wizard?.attributes
  const progress = {
    width: (currentScreen / 4) * 100 + '%'
  }

  const onLocationTypeChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onFormChange({
      ...form,
      locationType: e.target.value,
      location: '',
      attribute: ''
    })
    setText('')
    setSuggestions([])
    try {
      const result = await getWizardLocations(e.target.value.toLowerCase())
      setLocations(result)
    } catch (error) {
      console.log(error)
    }
  }

  const onLocationInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let arr: string[] = []
    const value = e.target.value.toLowerCase()

    if (value.length > 0) {
      arr = locations
        .sort()
        .filter((v: string) => v.toLowerCase().includes(value))
    }
    setSuggestions(arr)
    setText(value)
  }

  const onLocationSelect = (value: string) => {
    setText(value)
    setSuggestions([])
    onFormChange({
      ...form,
      location: value,
      attribute: ''
    })
  }

  const renderSuggestions = () => {
    if (!text && suggestions.length === 0 && locations.length > 0) {
      return (
        <ul>
          {locations.map((loc, idx) => (
            <li key={loc} onClick={() => onLocationSelect(loc)}>
              {loc}
            </li>
          ))}
        </ul>
      )
    } else if (suggestions.length === 0) {
      return null
    }
    return (
      <ul>
        {suggestions.map((loc, idx) => (
          <li key={loc} onClick={() => onLocationSelect(loc)}>
            {loc}
          </li>
        ))}
      </ul>
    )
  }

  const getAtrributes = () => {
    const nonNationalAttributes = [
      'Beds 0',
      'Beds 1',
      'Beds 2',
      'Beds 3',
      'Beds 4',
      'Beds 5',
      'Beds 5+',
      'SqFt 4,000+',
      'SqFt 2,500 <= 4,000',
      'SqFt 1,500 <= 2,500',
      'SqFt <= 1,500'
    ]
    return (form.locationType !== 'National'
      ? nonNationalAttributes
      : attributes
    )?.map((attr, idx) => {
      return (
        <option value={attr} key={attr}>
          {attr}
        </option>
      )
    })
  }

  return (
    <>
      <p>Pick a location and attribute</p>
      <div className="locations">
        <select
          className="custom-select location-type-select"
          onChange={e => onLocationTypeChange(e)}
          value={form.locationType}
        >
          <option value={''} disabled>
            All...
          </option>
          {geos &&
            geos.map((geo, idx) => {
              return (
                <option value={geo} key={geo}>
                  {geo}
                </option>
              )
            })}
        </select>
        <div className="location-select">
          <input
            className="form-control location-select"
            onChange={e => onLocationInputChange(e)}
            value={text}
            disabled={!form.locationType}
            type="text"
            id="hpi-location-select"
          />
          {renderSuggestions()}
        </div>
      </div>
      <div className="attributes">
        <select
          className="custom-select attribute-select"
          onChange={e => onFormChange({ ...form, attribute: e.target.value })}
          disabled={!form.locationType || !form.location}
          value={form.attribute}
        >
          <option value={''} disabled>
            Compare attributes
          </option>
          {getAtrributes()}
        </select>
      </div>
      <div className="continue">
        <button
          className="btn btn-primary"
          disabled={!form.locationType || !form.location || !form.attribute}
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
    </>
  )
}
