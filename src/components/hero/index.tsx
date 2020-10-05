import React from 'react'
import { Background } from './Background'
import { Header } from './Header'

interface Props {}

export const Hero: React.FC<Props> = () => {
  return (
    <section className="hero">
      <Background />
      <Header />
      <div className="hero-content">
        <div className="item">I am item 1</div>
        <div className="item">I am item 2</div>
      </div>
    </section>
  )
}
