import React, { useContext } from 'react'
import { ContentContext } from 'components/App'

interface Props {}

export const LearningCenter: React.FC<Props> = () => {
  const { learningCenter } = useContext(ContentContext)

  if (learningCenter) {
    const icons = learningCenter.icons
    return (
      <section className="container-fluid learning-center-container">
        <div className="row hpi-section-title">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <img
              src={`./static/images/indicators/${learningCenter.titleIcon}`}
              alt="light-bulb-on"
              className="learning-center-icon"
            />
            <h1>{learningCenter?.title}</h1>
          </div>
        </div>
        <div className="row description">
          <h3 className="hpi-section-subtitle">{learningCenter?.subtitle}</h3>
          <p>{learningCenter?.description}</p>
        </div>
        <div className="row">
          <div className="col d-flex flex-column">
            <div className="d-flex align-items-center">
              <img
                src={`./static/images/indicators/${icons![0].icon}`}
                alt="radian icon"
                className="learning-center-icon"
              />
              <div className="icon-description">
                <h5>{icons![0].title}</h5>
                <p>{icons![0].description}</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img
                src={`./static/images/indicators/${icons![1].icon}`}
                alt="radian icon"
                className="learning-center-icon"
              />
              <div className="icon-description">
                <h5>{icons![1].title}</h5>
                <p>{icons![1].description}</p>
              </div>
            </div>
          </div>
          <div className="col d-flex flex-column">
            <div className="d-flex align-items-center">
              <img
                src={`./static/images/indicators/${icons![2].icon}`}
                alt="light-bulb-on"
                className="learning-center-icon"
              />
              <div className="icon-description">
                <h5>{icons![2].title}</h5>
                <p>{icons![2].description}</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <img
                src={`./static/images/indicators/${icons![3].icon}`}
                alt="light-bulb-on"
                className="learning-center-icon"
              />
              <div className="icon-description">
                <h5>{icons![3].title}</h5>
                <p>{icons![3].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  } else return null
}
