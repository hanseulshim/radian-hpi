import React, { useContext, useState } from 'react'
import { ContentContext } from 'components/App'
import { Wizard } from './wizard'
import { Dashboard } from './dashboard'
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
          {showWizard ? (
            <Wizard setWizardScreen={setWizardScreen} />
          ) : (
            <>
              <h3 className="title-row">HPI Insights Dashboard</h3>
              <Dashboard />
            </>
          )}
        </div>
      </div>
      <div className="row disclaimer">
        <p>
          The analyses, valuations, estimates and forecasts in this document are
          not intended to constitute representations, or guaranties regarding
          the information provided herein, and they do not constitute a
          recommendation, forecast or an opinion as to whether or what price a
          transaction should occur and/or loans or real estate or other assets
          should be purchased, sold or held now or in the future. The
          information in this document is provided on an “as is” basis, with no
          warranties of any kind whatsoever. Radian Group Inc. and its
          subsidiaries, including Red Bell Real Estate, LLC, shall have no
          liability to any party for any claim related to any information
          contained in this document. This document may not be reproduced,
          distributed to unauthorized parties or used for commercial purposes.
        </p>
      </div>
    </section>
  )
}
