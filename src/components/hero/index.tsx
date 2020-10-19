import React, { useContext } from 'react'
import { ContentContext } from 'components/App'


interface Props {}

export const Hero: React.FC<Props> = () => {
  const {hero} = useContext(ContentContext)
  return (
    <section
      className="container-fluid"
      style={{ color: 'var(--blue)', padding: '5%' }}
    >
      <div className="row hero-content">
        <div className="col">
          <h1 className="display-3">{hero?.title}</h1>
          <h1>The Next Generation of Home Price Analysis</h1>
          <p>
            Leveraging a wealth of housing data and machine learning, Radian
            Home Price Index contains the most accurate housing valuations
            across nearly all of the U.S. housing stock. Radian valuations are
            based on "current" condition and are updated monthly. Give it a try
            below.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
        <div className="col">
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
