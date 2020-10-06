import React from 'react'
import { Header } from './Header'
import heroImages from 'assets/heroImages.png'
import housingWireLogo from 'assets/housingWireLogo.png'
import businessWireLogo from 'assets/businessWireLogo.png'

interface Props {}

export const Hero: React.FC<Props> = () => {
  return (
    <section className="hero">
      <Header />
      <div className="hero-content">
        <div className="hero-description">
          <h1>Radian HPI</h1>
          <h2 style={{ fontWeight: 500 }}>
            The Next Generation of Home Price Analysis
          </h2>
          <h5>
            Leveraging a wealth of housing data and machine learning, Radian
            Home Price Index contains the most accurate housing valuations
            across nearly all of the U.S. housing stock. Radian valuations are
            based on "current" condition and are updated monthly. Give it a try
            below.
          </h5>
          <div className="hero-explore">
            <input type="text" placeholder="State, City, Zip, etc..."></input>
            <span>
              <button className="btn btn-light">Explore</button>
            </span>
          </div>
        </div>
        <div className="hero-images">
          <img src={heroImages} alt="radian hpi" />
          <div className="featured-on">
            <p>As featured on</p>
            <div className="logos">
              <img src={housingWireLogo} alt="housing wire logo" />
              <img src={businessWireLogo} alt="business wire logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
