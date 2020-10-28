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
  const [competitor, setCompetitor] = useState<Competitor | null | undefined>(
    undefined
  )

  if (compare) {
    const { competitors, radianHpi } = compare

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const competitorIndex = parseInt(e.target.value)
      const selectedCompetitor = competitors?.find(
        (comp, index) => index === competitorIndex
      )
      if (selectedCompetitor) {
        setCompetitor(selectedCompetitor)
      } else {
        setCompetitor(undefined)
      }
    }

    return (
      <section className="container-fluid compare-container">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <div className="compare-title d-flex align-items-center justify-content-center">
              <img
                src={`static/images/indicators/${compare.titleIcon}`}
                alt="Price index icon"
              />
              <h2>{compare.title}</h2>
            </div>
          </div>
        </div>
        <div className="row compare-content">
          <div className="col-md-12 compare-select">
            {!competitor ? (
              <h4>{compare.subtitle}</h4>
            ) : (
              <h4>How this type of competitor compares to Radian HPI</h4>
            )}
            <p>{compare.instructions}</p>
            <div className="hpi-tool-select">
              <h5>Are you currently using an index tool?</h5>
              <p>If yes, choose a tool</p>
              <select className="custom-select" onChange={onChange}>
                <option value={undefined}>Choose an app...</option>
                {competitors?.map((competitor, idx) => {
                  return (
                    <option value={idx} key={'competitor' + idx}>
                      {competitor.name}
                    </option>
                  )
                })}
              </select>
            </div>
            <img
              src={'./assets/hpi_on_tablet.png'}
              className="hpi-compare-bg"
              alt="hpi tablet view"
            />
          </div>
          <div className="col compare-table">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th></th>
                  {competitor && <th>{competitor.name}</th>}
                  <th>
                    <img
                      src={`assets/${compare.hpiRateFinderImage}`}
                      alt="HPI Rate Finder"
                      className="hpi-rate-finder"
                    />
                    {radianHpi?.name}{' '}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Index Type</th>
                  {competitor && <td>{competitor.indexType}</td>}
                  <td>{radianHpi?.indexType}</td>
                </tr>
                <tr>
                  <th>Observations</th>
                  {competitor && <td>{competitor.observations}</td>}
                  <td>{radianHpi?.observations}</td>
                </tr>
                <tr>
                  <th>Data Frequency</th>
                  {competitor && <td>{competitor.dataFrequency}</td>}
                  <td>{radianHpi?.dataFrequency}</td>
                </tr>
                <tr>
                  <th>Monthly Observations</th>
                  {competitor && <td>{competitor.monthlyObservations}</td>}
                  <td>{radianHpi?.monthlyObservations}</td>
                </tr>
                <tr>
                  <th>Property and Transaction Exclusions</th>
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
                  <td>
                    {radianHpi?.propertyTransactionExclusions
                      ? radianHpi?.propertyTransactionExclusions.map(
                          (excl, idx) => {
                            return <li key={'excl' + idx}>{excl}</li>
                          }
                        )
                      : 'None'}
                  </td>
                </tr>
                <tr>
                  <th>Index Delivery Delay</th>
                  {competitor && <td>{competitor.indexDeliveryDelay}</td>}
                  <td>{radianHpi?.indexDeliveryDelay}</td>
                </tr>
                <tr>
                  <th>Property Condition</th>
                  {competitor && <td>{competitor.propertyCondition}</td>}
                  <td>{radianHpi?.propertyCondition}</td>
                </tr>
                <tr>
                  <th>Imposed Model Adjustments</th>
                  {competitor && <td>{competitor.imposedModelAdjustments}</td>}
                  <td>{radianHpi?.imposedModelAdjustments}</td>
                </tr>
                <tr>
                  <th>Property Type</th>
                  {competitor && (
                    <td>
                      {competitor.propertyType
                        ? competitor?.propertyType.map((excl, idx) => {
                            return <li key={'comp-type' + idx}>{excl}</li>
                          })
                        : 'None'}
                    </td>
                  )}
                  <td>
                    {radianHpi?.propertyType
                      ? radianHpi?.propertyType.map((type, idx) => {
                          return <li key={'type' + idx}>{type}</li>
                        })
                      : 'None'}
                  </td>
                </tr>
                <tr>
                  <th>States in National Index</th>
                  {competitor && <td>{competitor.statesInNationalIndex}</td>}
                  <td>{radianHpi?.statesInNationalIndex}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="hpi-compare-mask" />
        </div>
      </section>
    )
  } else return null
}
