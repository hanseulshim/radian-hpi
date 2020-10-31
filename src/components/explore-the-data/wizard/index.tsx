import React, { useContext, useState } from 'react'
import { ContentContext } from 'components/App'
import { GetStarted } from './screens/GetStarted'
import { Industry } from './screens/Industry'

interface Props {}

export const Wizard: React.FC<Props> = () => {
  const { exploreTheData } = useContext(ContentContext)
  const wizard = exploreTheData?.wizard

  // Track which Wizard screen the user is on
  const [screen, setScreen] = useState(0)

  // Track the users inputs in the wizard
  const [form, setForm] = useState({
    industry: '',
    locationType: '',
    location: '',
    attribute: '',
    role: ''
  })

  const onFormChange = (name: string, value: string) =>
    setForm({
      ...form,
      [name]: value
    })

  const changeScreen = (screenIndex: number) => setScreen(screenIndex)

  if (wizard) {
    return (
      <div className="wizard-overlay">
        <div className="wizard-container">
          <h2>{wizard.title}</h2>
          {screen === 0 && (
            <GetStarted
              onFormChange={onFormChange}
              changeScreen={changeScreen}
              currentScreen={screen}
            />
          )}
          {screen === 1 && (
            <Industry
              onFormChange={onFormChange}
              changeScreen={changeScreen}
              currentScreen={screen}
            />
          )}
          {screen === 1 && <p>Next</p>}
          {screen === 0 && (
            <img
              src={'./assets/hpi_wizard_bg.svg'}
              alt="line background"
              className="hpi-wizard-bg"
            />
          )}
        </div>
      </div>
    )
  } else return null
}
