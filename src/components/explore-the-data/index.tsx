import React, { useContext, useEffect, useState } from 'react'
import { ContentContext } from 'components/App'
import { Wizard } from './wizard'
import { Dashboard } from './dashboard'
import { useCookies } from 'react-cookie'
import { generateWizard } from 'api'

interface Props {}

interface Form {
  industry: string
  locationType: string
  location: string
  attribute: string
  role: string
  usesIndexTool: string
}

export const ExploreTheData: React.FC<Props> = () => {
  const { exploreTheData } = useContext(ContentContext)
  const [cookies, setCookie] = useCookies(['wizardSelections'])
  const [showWizard, setWizard] = useState(!cookies.wizardSelections)
  const [data, setData] = useState<string[]>([])

  const { wizardSelections } = cookies

  useEffect(() => {
    const getGeo = async () => {
      if (wizardSelections) {
        const cohorts = await generateWizard(wizardSelections)
        setData(cohorts)
      }
    }
    getGeo()
  }, [cookies, wizardSelections])

  const onGenerate = async (form: Form) => {
    const payload = Object.fromEntries(
      Object.entries(form).map(([k, v]) => [
        k,
        typeof v === 'string' ? v.toLowerCase() : v
      ])
    )
    try {
      const result = await generateWizard(payload as any)
      if (result) {
        setCookie('wizardSelections', payload, {
          maxAge: cookies.acceptsCookies ? undefined : 600
        })
        setData(result)
        setWizard(false)
      }
    } catch (error) {
      console.log(error)
    }
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
            <Wizard onGenerate={onGenerate} />
          ) : (
            <>
              <h3 className="title-row">HPI Insights Dashboard</h3>
              <Dashboard data={data} />
            </>
          )}
        </div>
      </div>
      <div className="row disclaimer">
        <p>{exploreTheData?.disclaimer}</p>
      </div>
    </section>
  )
}
