import React, { useContext, useState } from 'react'
import { ContentContext } from 'components/App'
import { acceptCookies } from 'api'

interface Props {
  changeScreen: (screen: number) => void
  currentScreen: number
}

export const GetStarted: React.FC<Props> = ({
  changeScreen,
  currentScreen
}) => {
  const { exploreTheData } = useContext(ContentContext)
  const wizard = exploreTheData?.wizard

  const onAcceptCookie = async () => {
    const result = await acceptCookies()
    console.log(result)
  }

  return (
    <div className="get-started-container">
      <img
        src={`./assets/${wizard?.image}`}
        alt={`${wizard?.image}`}
        className="wizard-image"
      />
      <h5>{wizard?.subtitle}</h5>
      <button
        className="btn btn-primary"
        onClick={() => changeScreen(currentScreen + 1)}
      >
        Get Started
      </button>
      <div className="hpi-cookies">
        <span>For faster personalization, please accept cookies</span>
        <button className="btn btn-outline-primary" onClick={onAcceptCookie}>
          Accept
        </button>
      </div>
    </div>
  )
}
