import React, { useContext, useState } from 'react'
import { ContentContext } from 'components/App'
import { Wizard } from './wizard'
import { useCookies } from 'react-cookie'

interface Props {}

export const ExploreTheData: React.FC<Props> = () => {
  const { exploreTheData } = useContext(ContentContext)
  const [cookies] = useCookies(['wizardSelections'])
  const [showWizard, setWizard] = useState(!cookies.wizardSelections)

  const setWizardScreen = (boolean: boolean) => {
    setWizard(boolean)
  }

  return (
    <section
      className="container-fluid explore-the-data-container"
      id="exploreTheData"
    >
      <div className="row hpi-section-title learning-center-title">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <h1>{exploreTheData?.title}</h1>
        </div>
      </div>
      <div className="row">
        <div className={`col col-sm-12 viz-container`}>
          <h3>HPI Insights Dashboard</h3>
          {showWizard && <Wizard setWizardScreen={setWizardScreen} />}
        </div>
      </div>
    </section>
  )
}
