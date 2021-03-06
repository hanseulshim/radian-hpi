import React, { useState } from 'react'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import { getWizardLocations } from 'api'

interface Props {
  geo: string
  onChange: (location: string[]) => void
  selected: string[]
  locationType: string
}

export const LocationSelect: React.FC<Props> = ({
  geo,
  onChange,
  selected,
  locationType
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [options, setOptions] = useState<string[]>([])

  const onSelection = (option: string[]) => {
    if (option) {
      onChange(option)
    }
  }

  const handleSearch = async (searchString: string) => {
    setIsLoading(true)
    const locations = await getWizardLocations({ geo, searchString })
    setOptions(locations)
    setIsLoading(false)
  }

  const filterBy = () => true

  return (
    <AsyncTypeahead
      selected={selected}
      filterBy={filterBy}
      id="async-example"
      isLoading={isLoading}
      minLength={locationType === 'State' ? 2 : 3}
      onSearch={handleSearch}
      options={options}
      placeholder={`Search for a location...`}
      onChange={option => onSelection(option)}
      disabled={locationType === 'National'}
      renderMenuItemChildren={(option, props) => (
        <>
          <span>{option}</span>
        </>
      )}
    />
  )
}
