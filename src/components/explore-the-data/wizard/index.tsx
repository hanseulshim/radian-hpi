import React, { useContext, useState } from 'react'
import { ContentContext } from 'components/App'
import { GetStarted } from './screens/GetStarted'
import { Industry } from './screens/Industry'
import { LocationAttribute } from './screens/LocationAttribute'
import { Role } from './screens/Role'

interface Props {
  onGenerate: (form: Form) => void
}

interface Form {
  industry: string
  locationType: string
  location: string
  attribute: string
  role: string
  usesIndexTool: string
}

export const Wizard: React.FC<Props> = ({ onGenerate }) => {
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
    role: '',
    usesIndexTool: ''
  })

  const onFormChange = (form: Form) => {
    setForm({
      ...form
    })
  }

  const changeScreen = (screenIndex: number) => setScreen(screenIndex)

  if (wizard) {
    return (
      <>
        <img
          src={'./assets/hpi_wizard_placeholder.svg'}
          alt="hpi wizard placeholder"
          className="hpi-dashboard-placeholder"
        />
        <div className="wizard-container">
          <h2>{wizard.title}</h2>
          {screen === 0 && (
            <GetStarted changeScreen={changeScreen} currentScreen={screen} />
          )}
          {screen === 1 && (
            <Industry
              onFormChange={onFormChange}
              changeScreen={changeScreen}
              currentScreen={screen}
              form={form}
            />
          )}
          {screen === 2 && (
            <LocationAttribute
              onFormChange={onFormChange}
              changeScreen={changeScreen}
              currentScreen={screen}
              form={form}
            />
          )}
          {screen === 3 && (
            <Role
              onFormChange={onFormChange}
              changeScreen={changeScreen}
              currentScreen={screen}
              form={form}
              onGenerate={onGenerate}
            />
          )}
          {screen === 0 && (
            <img
              src={'./assets/hpi_wizard_bg.svg'}
              alt="line background"
              className="hpi-wizard-bg"
            />
          )}
        </div>
      </>
    )
  } else return null
}
