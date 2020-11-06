import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { dashboardGeo, dashboardLocations } from 'api'
import IconX from './IconX'
import HpiStock from './HpiStock'
import AhpaStock from './AhpaStock'
import Donut from './Donut'
import { Main } from './main'
interface Props {}
interface Geo {
  location: string
  type: string
}

const rest = [
  'All',
  'Beds 0',
  'Beds 1',
  'Beds 2',
  'Beds 3',
  'Beds 4',
  'Beds 5+',
  'Sqft 4,000+',
  'Sqft 2,500 <= 4,000',
  'Sqft 1,500 <= 2,500',
  'Sqft < 1,500'
]

const national = [
  'All',
  'Beds 0',
  'Beds 1',
  'Beds 2',
  'Beds 3',
  'Beds 4',
  'Beds 5+',
  'Price $1M+',
  'Price $500k < $1M',
  'Price $250k < $500k',
  'Price $150k < $250k',
  'Price $100k < $150k',
  'Price < $100k',
  'Sqft 4,000+',
  'Sqft 2,500 <= 4,000',
  'Sqft 1,500 <= 2,500',
  'Sqft < 1,500',
  'Type Condo',
  'Type Single Family'
]

export const Dashboard: React.FC<Props> = () => {
  const [cookies] = useCookies(['wizardSelections'])
  const [geos, setGeos] = useState<Geo[]>([])
  const [locations, setLocations] = useState<Geo[]>([])
  const [searchEnabled, setSearchEnabled] = useState<boolean>(false)
  const [text, setText] = useState('')
  const [type, setType] = useState('')
  const [attributes, setAttributes] = useState<string[]>([])
  const [suggestions, setSuggestions] = useState<Geo[]>([])

  const { wizardSelections } = cookies

  useEffect(() => {
    const getGeo = async () => {
      if (cookies.wizardSelections) {
        const geos = await dashboardGeo(wizardSelections)
        const locations = await dashboardLocations(wizardSelections)
        setGeos(geos)
        setLocations(locations)
      }
    }
    getGeo()
  }, [cookies, wizardSelections])

  const onLocationInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let arr: Geo[] = []
    const value = e.target.value.toLowerCase()

    if (value.length > 0) {
      arr = locations.filter((v: Geo) =>
        v.location.toLowerCase().includes(value)
      )
    }
    setSuggestions(arr)
    setText(value)
  }

  const onAttributeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const arr = geos.slice()
    if (arr.length > 5) {
      arr.pop()
    }
    arr.push({ location: text, type: e.target.value })
    setGeos(arr)
    setText('')
    setType('')
  }

  const onLocationSelect = async (loc: Geo) => {
    setSearchEnabled(false)
    setText(loc.location)
    if (loc.type === 'national') {
      setAttributes(national)
    } else {
      setAttributes(rest)
    }
    setSuggestions([])
  }

  const renderSuggestions = () => {
    if (!text && suggestions.length === 0 && locations.length > 0) {
      return (
        <ul>
          {locations.map((loc, idx) => (
            <li key={idx} onClick={() => onLocationSelect(loc)}>
              <div className="suggestion">
                <span>{loc.location}</span>
                <span className={loc.type.toLowerCase()}>{loc.type}</span>
              </div>
            </li>
          ))}
        </ul>
      )
    } else if (suggestions.length === 0) {
      return null
    }
    return (
      <ul>
        {suggestions.map((loc, idx) => (
          <li key={idx} onClick={() => onLocationSelect(loc)}>
            {loc.location}
          </li>
        ))}
      </ul>
    )
  }

  const removeToggle = (index: number) => {
    const copyGeoList = geos.slice()
    copyGeoList.splice(index, 1)
    setGeos(copyGeoList)
  }

  return (
    <div className="dashboard-container">
      <div className="left-panel">
        <div className="select-container">
          <div className="location-select">
            <input
              className="form-control"
              onChange={e => onLocationInputChange(e)}
              onFocus={() => setSearchEnabled(true)}
              onBlur={() =>
                setTimeout(() => {
                  setSearchEnabled(false)
                }, 200)
              }
              value={text}
              placeholder="Location"
              type="text"
            />
            {searchEnabled && renderSuggestions()}
          </div>
          <select
            className="custom-select"
            onChange={e => onAttributeChange(e)}
            value={type}
          >
            <option disabled value={''}>
              Attribute
            </option>
            {attributes.map(attribute => (
              <option value={attribute} key={attribute}>
                {attribute}
              </option>
            ))}
          </select>
        </div>
        <div className="location-toggle">
          {geos &&
            geos.map((geo, index) => {
              return (
                <div key={index} className={`toggle color-${index}`}>
                  <div className={`circle color-${index}`} />
                  <div>
                    {geo.location} - {geo.type}
                  </div>
                  <IconX
                    onClick={() => removeToggle(index)}
                    className={`color-${index}`}
                  />
                </div>
              )
            })}
        </div>
        {geos.length && <Donut locations={geos} />}
        {geos.length && <HpiStock locations={geos} />}
        {geos.length && <AhpaStock locations={geos} />}
      </div>
      <div className="main-panel">
        <Main geos={geos} />
      </div>
    </div>
  )
}
