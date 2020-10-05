import React from 'react'
import { Hero } from './components/hero'

interface Props {}

export const App: React.FC<Props> = () => {
  return (
    <div>
      <Hero />
    </div>
  )
}
