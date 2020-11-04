import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { dashboardGeo, dashboardLocations } from 'api'
import IconX from './IconX'
interface Props {}
interface Geo {
  name: string
  type: string
}

export const Dashboard: React.FC<Props> = () => {
  const [cookies] = useCookies(['wizardSelections'])
  const [geos, setGeos] = useState<Geo[]>([])
  const [locations, setLocations] = useState<Geo[]>([])
  const [searchEnabled, setSearchEnabled] = useState<boolean>(false)
  const [text, setText] = useState('')
  const [suggestions, setSuggestions] = useState<Geo[]>([])

  const { wizardSelections } = cookies

  useEffect(() => {
    const getGeo = async () => {
      const geos = await dashboardGeo(wizardSelections)
      const locations = await dashboardLocations(wizardSelections)
      setGeos(geos)
      setLocations(locations)
    }
    getGeo()
  }, [cookies, wizardSelections])

  const onLocationInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let arr: Geo[] = []
    const value = e.target.value.toLowerCase()

    if (value.length > 0) {
      arr = locations.filter((v: Geo) => v.name.toLowerCase().includes(value))
    }
    setSuggestions(arr)
    setText(value)
  }

  const onLocationSelect = (value: string) => {
    setSearchEnabled(false)
    setText(value)
    setSuggestions([])
  }

  const renderSuggestions = () => {
    if (!text && suggestions.length === 0 && locations.length > 0) {
      return (
        <ul>
          {locations.map((loc, idx) => (
            <li key={idx} onClick={() => onLocationSelect(loc.name)}>
              {loc.name}
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
          <li key={idx} onClick={() => onLocationSelect(loc.name)}>
            {loc.name}
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
                }, 150)
              }
              value={text}
              placeholder="Location"
              type="text"
            />
            {searchEnabled && renderSuggestions()}
          </div>
          <select className="custom-select" defaultValue={''}>
            <option disabled value={''}>
              Attribute
            </option>
          </select>
        </div>
        <div className="location-toggle">
          {geos.map((geo, index) => {
            return (
              <div key={index} className={`toggle color-${index}`}>
                <div className={`circle color-${index}`} />
                <div>
                  {geo.name} - {geo.type}
                </div>
                <IconX
                  onClick={() => removeToggle(index)}
                  className={`color-${index}`}
                />
              </div>
            )
          })}
        </div>
      </div>
      <div className="main-panel">main</div>
    </div>
  )
}
