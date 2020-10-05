import React from 'react'
import { Background } from './Background'
import { Header } from './Header'
import heroImages from 'assets/heroImages.png'

interface Props {}

export const Hero: React.FC<Props> = () => {
  return (
    <section className="hero">
      <Background />
      <Header />
      <div className="hero-content">
        <div className="hero-description">
          <h1>Radian HPI</h1>
          <h2 style={{ fontWeight: 500 }}>
            The Next Generation of Home Price Analysis
          </h2>
          <h5>
            Leveraging a wealth of housing data and machine learning, Radian
            Home Price Index contains the most accurate jousing valuations
            across nearly all of the U.S. housing stock. Radian valuations are
            based on "current" condition and are updated monthly. Give it a try
            below.
          </h5>
        </div>
        <div className="hero-images">
          <img src={heroImages} alt="radian hpi" />
        </div>
      </div>
    </section>
  )
}
