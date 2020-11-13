import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import { getCohorts, cohortSearch } from 'api'
import IconX from './IconX'
import HpiStock from './HpiStock'
import AhpaStock from './AhpaStock'
import Donut from './Donut'
import { Main } from './main'

interface Props {}

export const Dashboard: React.FC<Props> = () => {
  const [cookies] = useCookies(['wizardSelections'])
  const [cohorts, setCohorts] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [options, setOptions] = useState<string[]>([])

  const { wizardSelections } = cookies

  useEffect(() => {
    const getGeo = async () => {
      if (cookies.wizardSelections) {
        const cohorts = await getCohorts(wizardSelections)
        setCohorts(cohorts)
      }
    }
    getGeo()
  }, [cookies, wizardSelections])

  const onSelection = (option: string[]) => {
    const arr = cohorts.slice()
    if (arr.length > 5) {
      arr.pop()
    }
    arr.push(option[0])
    console.log(arr)
    setCohorts(arr)
  }

  const handleSearch = async (searchString: string) => {
    setIsLoading(true)
    const locations = await cohortSearch(searchString)
    setOptions(locations)
    setIsLoading(false)
  }

  const filterBy = () => true

  const removeToggle = (index: number) => {
    const copyCohortList = cohorts.slice()
    copyCohortList.splice(index, 1)
    setCohorts(copyCohortList)
  }

  return (
    <div className="dashboard-container">
      <div className="left-panel">
        <div className="select-container">
          <div className="location-select">
            <AsyncTypeahead
              filterBy={filterBy}
              id="async-example"
              isLoading={isLoading}
              minLength={3}
              onSearch={handleSearch}
              options={options}
              placeholder={`Search for a location...`}
              onChange={option => onSelection(option)}
              renderMenuItemChildren={(option, props) => (
                <>
                  <span>{option}</span>
                </>
              )}
            />
          </div>
        </div>
        <div className="location-toggle">
          {cohorts &&
            cohorts.map((cohort, index) => {
              return (
                <div key={index} className={`toggle color-${index}`}>
                  <div className={`circle color-${index}`} />
                  <div>{cohort}</div>
                  <IconX
                    onClick={() => removeToggle(index)}
                    className={`color-${index}`}
                  />
                </div>
              )
            })}
        </div>
        {cohorts.length && <Donut cohorts={cohorts} />}
        {cohorts.length && <HpiStock cohorts={cohorts} />}
        {cohorts.length && <AhpaStock cohorts={cohorts} />}
      </div>
      <div className="main-panel">
        {cohorts.length && <Main cohorts={cohorts} />}
      </div>
    </div>
  )
}
