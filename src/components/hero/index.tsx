import React, { useContext } from 'react'
import { ContentContext } from 'components/App'

interface Props {}

export const Hero: React.FC<Props> = () => {
  const { hero } = useContext(ContentContext)
  return (
    <section className="container-fluid hero-container">
      <img
        src={'./assets/hpi_hero_background.svg'}
        className="hpi-hero-bg"
        alt="radian gradient"
      />
      <div className="row hero-content">
        <div className="col hpi-description">
          <h1 className="display-3">{hero?.title}</h1>
          <h1>{hero?.subtitle}</h1>
          <p className="description">{hero?.description}</p>
          <button className="btn btn-primary">{hero?.cta}</button>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <img
            src={'./assets/hpi_hero_image.png'}
            alt="radian hpi"
            className="hpi-hero-image"
          />
          <div className="featured-on">
            <p>As featured on</p>
            <div className="logos">
              <img
                src={'./assets/housing_wire_logo.png'}
                alt="housing wire logo"
              />
              <img
                src={'./assets/business_wire_logo.png'}
                alt="business wire logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
