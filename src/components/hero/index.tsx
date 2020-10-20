import React, { useContext } from 'react'
import { ContentContext } from 'components/App'


interface Props {}

export const Hero: React.FC<Props> = () => {
  const {hero} = useContext(ContentContext)
  return (
    <section className="container-fluid hero-container">
      <div className="row hero-content">
        <div className="col">
          <h1 className="display-3">{hero?.title}</h1>
          <h1>{hero?.subtitle}</h1>
          <p className="description">
            {hero?.description}
          </p>
          <button className="btn btn-primary">{hero?.cta}</button>
        </div>
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <img src={'/assets/heroImages.png'} alt="radian hpi" />
          <div className="featured-on">
            <p>As featured on</p>
            <div className="logos">
              <img
                src={'/assets/housingWireLogo.png'}
                alt="housing wire logo"
              />
              <img
                src={'/assets/businessWireLogo.png'}
                alt="business wire logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
