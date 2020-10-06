import React from 'react'
import header from 'assets/header.png'

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <header>
      <img src={header} alt="dummy-header" />
    </header>
  )
}
