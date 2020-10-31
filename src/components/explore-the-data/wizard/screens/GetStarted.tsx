import React, { useContext, useState } from 'react'
import { ContentContext } from 'components/App'

interface Props {
  onFormChange: (name: string, value: string) => void
  changeScreen: (screen: number) => void
  currentScreen: number
}

export const GetStarted: React.FC<Props> = ({
  onFormChange,
  changeScreen,
  currentScreen
}) => {
  const { exploreTheData } = useContext(ContentContext)
  const wizard = exploreTheData?.wizard

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
        <button className="btn btn-outline-primary">Accept</button>
      </div>
    </div>
  )
}
