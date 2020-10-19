import React, {useEffect, useState} from 'react'
import 'styles/index.scss'
import { Hero } from './hero'
import { Header } from './Header'
import { DataInterface, initialState } from 'initialState'

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
      <Header />
      <main>
        <Hero />
      </main>
    </ContentContext.Provider>
  )
}
