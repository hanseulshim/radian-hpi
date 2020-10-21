import React, { useContext } from 'react'
import { ContentContext } from 'components/App'

interface Props {}

export const Compare: React.FC<Props> = () => {
  const { compare } = useContext(ContentContext)

  if (compare) {
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
              <select className="custom-select">
                <option defaultValue="Choose an app...">
                  Choose an app...
                </option>
                {compare.competitors?.map((competitor, idx) => {
                  return (
                    <option value={idx} key={'competitor' + idx}>
                      {competitor}
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
                  <th>Radian HPI</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Index Type</th>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th>Observations</th>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th>Data Frequency</th>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th>Monthly Observations</th>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
                <tr>
                  <th>Property and Transaction Exclusions</th>
                  <td>Cell</td>
                  <td>Cell</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  } else return null
}
