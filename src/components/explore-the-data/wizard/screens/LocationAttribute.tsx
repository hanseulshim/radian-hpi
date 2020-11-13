import React, { useContext } from 'react'
import { ContentContext } from 'components/App'
import { LocationSelect } from '../LocationSelect'

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

  const wizard = exploreTheData?.wizard
  const geos = wizard?.geos
  const attributeGroups = wizard?.attributeGroups
  const progress = {
    width: (currentScreen / 4) * 100 + '%'
  }

  const onLocationTypeChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    onFormChange({
      ...form,
      locationType: e.target.value,
      location: e.target.value === 'National' ? 'National' : '',
      attribute: ''
    })
  }

  const onLocationChange = async (location: string[]) => {
    onFormChange({
      ...form,
      location: location[0],
      attribute: ''
    })
  }

  const getAtrributeGroups = () => {
    let options: Array<string> | undefined = []
    if (form.locationType === 'National') {
      options = attributeGroups?.filter(
        attr =>
          attr !== 'Compare geographic hierarchies' &&
          attr !== 'Compare with national' &&
          attr !== 'Compare across regions'
      )
    } else if (form.locationType === 'Region') {
      options = attributeGroups?.filter(
        attr =>
          attr !== 'Compare geographic hierarchies' &&
          attr !== 'Compare price categories' &&
          attr !== 'Compare residential real estate types'
      )
    } else {
      options = attributeGroups?.filter(
        attr =>
          attr !== 'Compare price categories' &&
          attr !== 'Compare residential real estate types' &&
          attr !== 'Compare across regions'
      )
    }

    return options?.map((attr, idx) => {
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
            Select location type....
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
          <LocationSelect
            geo={form.locationType}
            onChange={onLocationChange}
            selected={form.location ? [form.location] : []}
            locationType={form.locationType}
          />
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
          {getAtrributeGroups()}
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
