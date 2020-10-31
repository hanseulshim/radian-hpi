import React from 'react'

interface Props {
  onFormChange: (name: string, value: string) => void
  changeScreen: (screen: number) => void
  currentScreen: number
}

export const Industry: React.FC<Props> = ({
  onFormChange,
  changeScreen,
  currentScreen
}) => {
  return (
    <>
      <select
        className="custom-select"
        onChange={e => onFormChange('industry', e.target.value)}
      >
        <option value={'finance'}>Finance</option>
        <option value={'software'}>software</option>
      </select>
    </>
  )
}
