import React from 'react'
import './styles/index.scss'
// import { Hero } from './components/hero'

interface Props {}

export const App: React.FC<Props> = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="jumbotron jumbotron-fluid">
            <h1>Container size jumboton</h1>
            <p>Think BIG with a Bootstrap Jumbotron!</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <img
              className="card-img-top"
              src="https://via.placeholder.com/576x360"
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              className="card-img-top"
              src="https://via.placeholder.com/576x360"
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              className="card-img-top"
              src="https://via.placeholder.com/576x360"
              alt="Card cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
