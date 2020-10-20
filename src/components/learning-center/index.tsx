import React, { useContext } from 'react'
import { ContentContext } from 'components/App'


interface Props {

}

export const LearningCenter: React.FC<Props> = () => {
  const { learningCenter } = useContext(ContentContext)
  // const {icons} = learningCenter

  return (
    <section
      className="container-fluid learning-center-container"
      style={{ color: 'var(--blue)' }}
    >
      <div className="row hpi-section-title">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <img src={'/static/images/indicators/lightbulb-on-light.svg'} alt="light-bulb-on" className='learning-center-icon' />
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
            <img src={`/static/images/indicators/lightbulb-on-light.svg`} alt="light-bulb-on" className='learning-center-icon' />
            <div className='icon-description'>
              <h5>Speed to Market</h5>
              <p>Offers results weeks earlier than other indices - days after months end</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <img src={'/static/images/indicators/lightbulb-on-light.svg'} alt="light-bulb-on" className='learning-center-icon' />
            <div className='icon-description'>
              <h5>Speed to Market</h5>
              <p>Offers results weeks earlier than other indices - days after months end</p>
            </div>
          </div>
        </div>
        <div className="col d-flex flex-column">
          <div className="d-flex align-items-center">
            <img src={'/static/images/indicators/lightbulb-on-light.svg'} alt="light-bulb-on" className='learning-center-icon' />
            <div className='icon-description'>
              <h5>Speed to Market</h5>
              <p>Offers results weeks earlier than other indices - days after months end</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <img src={'/static/images/indicators/lightbulb-on-light.svg'} alt="light-bulb-on" className='learning-center-icon' />
            <div className='icon-description'>
              <h5>Speed to Market</h5>
              <p>Offers results weeks earlier than other indices - days after months end</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}