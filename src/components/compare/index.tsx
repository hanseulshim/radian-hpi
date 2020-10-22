import React, { useContext, useState } from 'react'
import { ContentContext } from 'components/App'

interface Props {}

interface Competitor {
  name: string | null
  indexType: string | null
  observations: string | null
  dataFrequency: string | null
  monthlyObservations: string | null
  propertyTransactionExclusions: Array<string> | null
  indexDeliveryDelay: string | null
  propertyCondition: string | null
  imposedModelAdjustments: string | null
  propertyType: Array<string> | null
  statesInNationalIndex: string | null
}

export const Compare: React.FC<Props> = () => {
  const { compare } = useContext(ContentContext)
  const [competitor, setCompetitor] = useState<Competitor | null>(null)

  if (compare) {
    const { competitors, radianHpi } = compare

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const competitorIndex = parseInt(e.target.value)
      const selectedCompetitor = competitors?.find(
        (comp, index) => index === competitorIndex
      )
      if (selectedCompetitor) {
        setCompetitor(selectedCompetitor)
      }
    }

    return (
      <section className="container-fluid compare-container">
        <div className="row">
          <div className="compare-title d-flex align-items-center justify-content-center">
            <img
              src={`static/images/indicators/${compare.titleIcon}`}
              alt="Price index icon"
            />
            <h2>{compare.title}</h2>
          </div>
        </div>
        <div className="row compare-content">
          <div className="col compare-select">
            <h4>{compare.subtitle}</h4>
            <p>{compare.instructions}</p>
            <div className="hpi-tool-select">
              <h5>Are you currently using an index tool?</h5>
              <p>If yes, choose a tool</p>
              <select className="custom-select" onChange={onChange}>
                <option disabled selected value={undefined}>
                  Choose an app...
                </option>
                {competitors?.map((competitor, idx) => {
                  return (
                    <option value={idx} key={'competitor' + idx}>
                      {competitor.name}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className="col compare-table">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th></th>
                  <th>{radianHpi?.name}</th>
                  {competitor && <th>{competitor.name}</th>}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Index Type</th>
                  <td>{radianHpi?.indexType}</td>
                  {competitor && <td>{competitor.indexType}</td>}
                </tr>
                <tr>
                  <th>Observations</th>
                  <td>{radianHpi?.observations}</td>
                  {competitor && <td>{competitor.observations}</td>}
                </tr>
                <tr>
                  <th>Data Frequency</th>
                  <td>{radianHpi?.dataFrequency}</td>
                  {competitor && <td>{competitor.dataFrequency}</td>}
                </tr>
                <tr>
                  <th>Monthly Observations</th>
                  <td>{radianHpi?.monthlyObservations}</td>
                  {competitor && <td>{competitor.monthlyObservations}</td>}
                </tr>
                <tr>
                  <th>Property and Transaction Exclusions</th>
                  <td>
                    {radianHpi?.propertyTransactionExclusions
                      ? radianHpi?.propertyTransactionExclusions.map(
                          (excl, idx) => {
                            return <li key={'excl' + idx}>{excl}</li>
                          }
                        )
                      : 'None'}
                  </td>
                  {competitor && (
                    <td>
                      {competitor.propertyTransactionExclusions
                        ? competitor?.propertyTransactionExclusions.map(
                            (excl, idx) => {
                              return <li key={'comp-excl' + idx}>{excl}</li>
                            }
                          )
                        : 'None'}
                    </td>
                  )}
                </tr>
                <tr>
                  <th>Index Delivery Delay</th>
                  <td>{radianHpi?.indexDeliveryDelay}</td>
                  {competitor && <td>{competitor.indexDeliveryDelay}</td>}
                </tr>
                <tr>
                  <th>Property Condition</th>
                  <td>{radianHpi?.propertyCondition}</td>
                  {competitor && <td>{competitor.propertyCondition}</td>}
                </tr>
                <tr>
                  <th>Imposed Model Adjustments</th>
                  <td>{radianHpi?.imposedModelAdjustments}</td>
                  {competitor && <td>{competitor.imposedModelAdjustments}</td>}
                </tr>
                <tr>
                  <th>Property Type</th>
                  <td>
                    {radianHpi?.propertyType
                      ? radianHpi?.propertyType.map((type, idx) => {
                          return <li key={'type' + idx}>{type}</li>
                        })
                      : 'None'}
                  </td>
                  {competitor && (
                    <td>
                      {competitor.propertyType
                        ? competitor?.propertyType.map((excl, idx) => {
                            return <li key={'comp-type' + idx}>{excl}</li>
                          })
                        : 'None'}
                    </td>
                  )}
                </tr>
                <tr>
                  <th>States in National Index</th>
                  <td>{radianHpi?.statesInNationalIndex}</td>
                  {competitor && <td>{competitor.statesInNationalIndex}</td>}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  } else return null
}
