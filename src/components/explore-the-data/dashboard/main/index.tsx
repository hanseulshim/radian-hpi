import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { YearRangeSelect } from './YearRangeSelect'
import { Hpi } from './Hpi'
import { DateIndicator } from './DateIndicator'
import { Ahpa } from './Ahpa'

interface Geo {
  location: string
  type: string
}
interface Props {
  geos: Geo[]
}

export const Main: React.FC<Props> = ({ geos }) => {
  const [yearRange, setYearRange] = useState('All')
  const [startDate, setStartDate] = useState<Date>(new Date(2011, 0o1, 0o1))
  const [endDate, setEndDate] = useState<Date>(new Date())

  const onYearRangeSelect = (range: string) => {
    setYearRange(range)
  }

  return (
    <>
      <div className="controls">
        <DatePicker
          selected={startDate}
          onChange={date => {
            setYearRange('')
            setStartDate(date as Date)
          }}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <DatePicker
          selected={endDate}
          onChange={date => {
            setYearRange('')
            setEndDate(date as Date)
          }}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
        <YearRangeSelect
          yearRange={yearRange}
          onYearRangeSelect={onYearRangeSelect}
        />
      </div>
      <Hpi
        startDate={startDate}
        endDate={endDate}
        range={yearRange}
        geos={geos}
      />
      <DateIndicator
        range={yearRange}
        startDate={startDate}
        endDate={endDate}
      />
      <Ahpa
        startDate={startDate}
        endDate={endDate}
        range={yearRange}
        geos={geos}
      />
    </>
  )
}