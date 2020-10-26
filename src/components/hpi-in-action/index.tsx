import React, { useContext, useState } from 'react'
import { ContentContext } from 'components/App'

interface Props {}

interface Card {
  cardImage: string | null
  cardTitle: string | null
  cardSummary: string | null
  cardTitleFull: string | null
  cardBio: string | null
  cardFeatures: Array<{
    featureTitle: string | null
    featureDescription: string | null
  }>
}

export const HpiInAction: React.FC<Props> = () => {
  const { hpiInAction } = useContext(ContentContext)
  const [selectedCard, setSelectedCard] = useState<Card | null>(null)

  if (hpiInAction) {
    const { cards } = hpiInAction

    const onCardClick = (cardIndex: Number) => {
      const selectedCard = cards?.find((card, index) => index === cardIndex)
      if (selectedCard) {
        setSelectedCard(selectedCard)
      }
    }

    const onExitCard = () => {
      console.log('cleared!')
    }

    return (
      <section className="container-fluid hpi-in-action-container">
        <div className="row">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <img
              src={`/static/images/indicators/${hpiInAction.titleIcon}`}
              alt="Hpi in Action"
              className="hpi-in-action-icon"
            />
            <h1>{hpiInAction?.title}</h1>
            <p>{hpiInAction?.subtitle}</p>
          </div>
        </div>
        <div className="row hpi-cards-container">
          {!selectedCard &&
            cards?.map((card, idx) => {
              return (
                <div className="col">
                  <div className="hpi-card" onClick={() => onCardClick(idx)}>
                    <img
                      src={`./assets/${card.cardImage}`}
                      alt={`${card.cardTitle}`}
                    />
                    <div className="card-title-container">
                      <h4>{card.cardTitle}</h4>
                    </div>
                    <p>{card.cardSummary}</p>
                  </div>
                </div>
              )
            })}
          {selectedCard && (
            <div className="col hpi-card-full">
              <div className="card-name">
                <img
                  src={`./assets/${selectedCard.cardImage}`}
                  alt={selectedCard.cardTitle || 'role image'}
                />
                <h3>{selectedCard.cardTitleFull}</h3>
              </div>
              <div className="card-content">
                <p>{selectedCard.cardBio}</p>
                <h2>Most valuable features</h2>
                {selectedCard.cardFeatures &&
                  selectedCard.cardFeatures.map((feature, index) => {
                    console.log(feature)
                    return (
                      <div className="feature">
                        <h5>{feature.featureTitle}</h5>
                        <p>{feature.featureDescription}</p>
                      </div>
                    )
                  })}
              </div>
            </div>
          )}
        </div>
      </section>
    )
  } else return null
}
