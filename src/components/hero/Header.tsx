import React from 'react'

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <header>
      <img src={'/assets/header.png'} alt="dummy-header" />
    </header>
  )
}
