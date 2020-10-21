import React, {useEffect, useState} from 'react'
import 'styles/index.scss'
import { Hero } from './hero'
import { DataInterface, initialState } from 'initialState'
import { LearningCenter } from './learning-center'
import { Media } from './media'
import { Blog } from './blog'
import { Compare } from './compare'

export const ContentContext = React.createContext<DataInterface>(initialState)

export const App: React.FC = () => {
  const [content, setContent] = useState<DataInterface>(initialState)

  useEffect(() => {
    const fetchContent = async () => {
      const res = await fetch('./content.json')
      const content = await res.json()
      setContent(content)
    }

    fetchContent()
  }, [])
  return (
    <ContentContext.Provider value={content}>
      <header>
        <img src={'/assets/header.png'} alt="dummy-header" className='header' />
      </header>
      <main>
        <Hero />
        <LearningCenter/>
        <Media />
        <Blog/>
        <Compare/>
      </main>
    </ContentContext.Provider>
    
  )
}
