import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { YearRangeSelect } from './YearRangeSelect'
import { Hpi } from './Hpi'
import { MedianValue } from './MedianValue'
import { DateIndicator } from './DateIndicator'
import { Ahpa } from './Ahpa'

interface Props {
  cohorts: string[]
}

export const Main: React.FC<Props> = ({ cohorts }) => {
  const [yearRange, setYearRange] = useState('All')
  const [startDate, setStartDate] = useState<Date>(new Date(2011, 0o1, 0o1))
  const [endDate, setEndDate] = useState<Date>(new Date())
  const [dataOption, setDataOption] = useState('hpi')

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
      <div className="title-and-data-type">
        <h5>
          {dataOption === 'hpi'
            ? 'Home Price Index (HPI)'
            : 'Median Value Index'}
        </h5>
        <div className="hpi-controls">
          <div
            className={`hpi-option ${dataOption === 'hpi' ? 'selected' : ''}`}
            onClick={() => setDataOption('hpi')}
          >
            HPI
          </div>
          <div
            className={`hpi-option ${
              dataOption === 'median' ? 'selected' : ''
            }`}
            onClick={() => setDataOption('median')}
          >
            Median Value
          </div>
        </div>
      </div>
      {dataOption === 'hpi' ? (
        <Hpi
          startDate={startDate}
          endDate={endDate}
          range={yearRange}
          cohorts={cohorts}
        />
      ) : (
        <MedianValue
          startDate={startDate}
          endDate={endDate}
          range={yearRange}
          cohorts={cohorts}
        />
      )}
      <DateIndicator
        range={yearRange}
        startDate={startDate}
        endDate={endDate}
        cohorts={cohorts}
      />
      <Ahpa
        startDate={startDate}
        endDate={endDate}
        range={yearRange}
        cohorts={cohorts}
      />
    </>
  )
}
