import React, { useContext } from 'react'
import { ContentContext } from 'components/App'

interface Props {}

export const Media: React.FC<Props> = () => {
  const { media } = useContext(ContentContext)

  if (media) {
    return (
      <section className="container-fluid media-container">
        <div className="row">
          <div className="col video-players">
            <img
              src={'./assets/hpi_overview_video.png'}
              alt="hpi overview video"
            />
            <img src={'./assets/hpi_demo_video.png'} alt="hpi demo video" />
          </div>
          <div className="col">
            <div className="media-download">
              <h5 className="title">{media.downloadTitle}</h5>
              <div className="d-flex">
                <img
                  src={`./assets/${media.downloadImage}`}
                  alt="Impacts of AI PDF"
                />
                <div className="d-flex flex-column justify-content-between download-description">
                  <h5>{media.downloadTitle}</h5>
                  <button className="btn btn-primary">Download</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  } else return null
}
