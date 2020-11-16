import React, { useContext } from 'react'
import { ContentContext } from 'components/App'

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
  onGenerate: (form: Form) => void
}

export const Role: React.FC<Props> = ({
  onFormChange,
  changeScreen,
  currentScreen,
  form,
  onGenerate
}) => {
  const { exploreTheData } = useContext(ContentContext)
  const wizard = exploreTheData?.wizard
  const roles = wizard?.roles

  const progress = {
    width: (currentScreen / 4) * 100 + '%'
  }

  return (
    <>
      <p className="subtitle">
        You're almost done! Just fill out the short form below and click
        'Generate'!
      </p>
      <div className="role">
        <select
          className="custom-select role-select"
          onChange={e =>
            onFormChange({
              ...form,
              role: e.target.value
            })
          }
          value={form.role}
        >
          <option value={''} disabled>
            What is your role?
          </option>
          {roles &&
            roles.map((role, idx) => {
              return (
                <option value={role} key={role}>
                  {role}
                </option>
              )
            })}
        </select>
      </div>
      <div
        className="uses-index-tool"
        style={{ visibility: form.role ? 'visible' : 'hidden' }}
      >
        <p>Do you use a home price index today?</p>
        <button
          className="btn btn-outline-primary"
          onClick={e => onFormChange({ ...form, usesIndexTool: 'yes' })}
        >
          Yes
        </button>
        <button
          className="btn btn-outline-primary"
          onClick={e => onFormChange({ ...form, usesIndexTool: 'no' })}
        >
          No
        </button>
      </div>
      <div className="continue">
        <button
          className="btn btn-primary"
          disabled={!form.role || !form.usesIndexTool}
          onClick={() => onGenerate(form)}
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
    </>
  )
}
