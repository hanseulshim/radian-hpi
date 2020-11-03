import React, { useContext, useState } from 'react'
import { ContentContext } from 'components/App'
import { GetStarted } from './screens/GetStarted'
import { Industry } from './screens/Industry'
import { LocationAttribute } from './screens/LocationAttribute'
import { Role } from './screens/Role'
import { generateWizard } from 'api'
import { useCookies } from 'react-cookie'

interface Props {
  setWizardScreen: (boolean: boolean) => void
}

interface Form {
  industry: string
  locationType: string
  location: string
  attribute: string
  role: string
  usesIndexTool: boolean
}

export const Wizard: React.FC<Props> = ({ setWizardScreen }) => {
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
    usesIndexTool: false
  })

  const [cookies, setCookie] = useCookies(['wizardSelections'])

  const onGenerate = async () => {
    const payload = Object.fromEntries(
      Object.entries(form).map(([k, v]) => [
        k,
        typeof v === 'string' ? v.toLowerCase() : v
      ])
    )
    try {
      const result = await generateWizard(payload as any)
      if (result) {
        setCookie('wizardSelections', payload)
        setWizardScreen(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const onFormChange = (form: Form) => {
    setForm({
      ...form
    })
  }

  const changeScreen = (screenIndex: number) => setScreen(screenIndex)

  if (wizard) {
    return (
      <div className="wizard-overlay">
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
      </div>
    )
  } else return null
}
