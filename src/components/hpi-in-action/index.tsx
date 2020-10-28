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
      setSelectedCard(null)
    }

    return (
      <section className="container-fluid hpi-in-action-container">
        <div className="row">
          <div className="col d-flex flex-column justify-content-center align-items-center">
            <img
              src={`./static/images/indicators/${hpiInAction.titleIcon}`}
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
                <div className="col" key={'radian-feature' + idx}>
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
              <img
                src={'./assets/icon_X.png'}
                className="hpi-card-full-exit"
                alt="exit-card"
                onClick={onExitCard}
              />
              <div className="hpi-card-full-name">
                <img
                  src={`./assets/${selectedCard.cardImage}`}
                  alt={selectedCard.cardTitle || 'role image'}
                />
                <h5>The</h5>
                <h2>{selectedCard.cardTitleFull}</h2>
              </div>
              <div className="hpi-card-full-content">
                <p className="hpi-card-full-content-bio">
                  {selectedCard.cardBio}
                </p>
                <h4>Most valuable features</h4>
                {selectedCard.cardFeatures && (
                  <div className="hpi-card-full-content-features">
                    {selectedCard.cardFeatures.map((feature, idx) => {
                      return (
                        <div
                          className="hpi-card-full-content-feature"
                          key={`${feature.featureTitle} + ${idx}`}
                        >
                          <h5>{feature.featureTitle}</h5>
                          <p>{feature.featureDescription}</p>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    )
  } else return null
}
