import React, { useContext } from 'react'
import { ContentContext } from 'components/App'

interface Form {
  industry: string
  locationType: string
  location: string
  attribute: string
  role: string
  usesIndexTool: boolean | undefined
}

interface Props {
  onFormChange: (name: string, value: string) => void
  changeScreen: (screen: number) => void
  currentScreen: number
  form: Form
}

export const Industry: React.FC<Props> = ({
  onFormChange,
  changeScreen,
  currentScreen,
  form
}) => {
  const { exploreTheData } = useContext(ContentContext)
  const wizard = exploreTheData?.wizard
  const industries = wizard?.industries

  const progress = {
    width: (currentScreen / 4) * 100 + '%'
  }

  return (
    <div className="industry-container">
      <select
        className="custom-select"
        onChange={e => onFormChange('industry', e.target.value)}
        value={form.industry}
      >
        <option value={''}>What is your industry?</option>
        {industries &&
          industries.map((ind, idx) => {
            return (
              <option value={ind} key={ind}>
                {ind}
              </option>
            )
          })}
      </select>
      <div className="continue">
        <button
          className="btn btn-primary"
          disabled={!form.industry}
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
      </div>
    </div>
  )
}
