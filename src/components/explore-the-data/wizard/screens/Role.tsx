import React from 'react'

interface Props {
  onFormChange: (name: string, value: string | boolean) => void
  changeScreen: (screen: number) => void
  currentScreen: number
  role: string
  usesIndexTool: boolean | undefined
}

export const Role: React.FC<Props> = ({
  onFormChange,
  changeScreen,
  currentScreen,
  role,
  usesIndexTool
}) => {
  const progress = {
    width: (currentScreen / 4) * 100 + '%'
  }

  return (
    <div className="role-container">
      <p className="subtitle">
        You're almost done! Just fill out the short form below and click
        'Generate'!
      </p>
      <div className="role">
        <select
          className="custom-select role-select"
          onChange={e => onFormChange('role', e.target.value)}
          value={role}
        >
          <option value={''}>What is your role?</option>
          <option value={'good guy'}>Good guy</option>
          <option value={'bad guy'}>Bad guy</option>
        </select>
      </div>
      <div
        className="uses-index-tool"
        style={{ visibility: role ? 'visible' : 'hidden' }}
      >
        <p>Do you use a home price index today?</p>
        <button
          className="btn btn-outline-primary"
          onClick={e => onFormChange('usesIndexTool', true)}
        >
          Yes
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={e => onFormChange('usesIndexTool', false)}
        >
          No
        </button>
      </div>
      <div className="generate">
        <button
          className="btn btn-primary"
          disabled={!role || usesIndexTool === undefined}
          onClick={() => changeScreen(0)}
        >
          Generate!
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
