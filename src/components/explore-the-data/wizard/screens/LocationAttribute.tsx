import React from 'react'

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
  const progress = {
    width: (currentScreen / 4) * 100 + '%'
  }

  return (
    <div className="location-attribute-container">
      <p>Pick a location and attribute</p>
      <div className="locations">
        <select
          className="custom-select location-type-select"
          onChange={e => onFormChange('locationType', e.target.value)}
          value={locationType}
        >
          <option value={''}>All...</option>
          <option value={'zipcode'}>Zip Code</option>
          <option value={'neighborhood'}>Neighborhood</option>
        </select>
        <select
          className="custom-select location-select"
          onChange={e => onFormChange('location', e.target.value)}
          value={location}
        >
          <option value={''}>Type a specific location here</option>
          <option value={'zipcode'}>Zip Code</option>
          <option value={'neighborhood'}>Neighborhood</option>
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
