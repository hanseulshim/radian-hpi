import React, { useContext } from 'react'
import { ContentContext } from 'components/App'

interface Props {}

export const RequestDemo: React.FC<Props> = () => {
  return (
    <section className="container-fluid hpi-request-demo-container">
      <div className="row hpi-section-title">
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <h1>Request a Demo</h1>
        </div>
      </div>
      <form className="hpi-request-demo-form">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Company name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Email Address"
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Phone number"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="What is your job function?"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </section>
  )
}
