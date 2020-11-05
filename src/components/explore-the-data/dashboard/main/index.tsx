import React, { useContext, useState } from 'react'
import { DatePicker } from 'antd'
import { YearRangeSelect } from './YearRangeSelect'
import moment from 'moment'
import { Hpi } from './Hpi'

const { RangePicker } = DatePicker

interface Geo {
  location: string
  type: string
}
interface Props {
  locations: Geo[]
}

export const Main: React.FC<Props> = ({ locations }) => {
  const [yearRange, setYearRange] = useState('All')
  const [dates, setDates] = useState({
    startDate: moment(new Date()).format('MM/DD/YYYY'),
    endDate: moment(new Date()).format('MM/DD/YYYY')
  })

  const onYearRangeSelect = (range: string) => {
    setYearRange(range)
  }

  const onRangePickerChange = (dates: any) => {
    setDates({
      startDate: moment(dates[0]).format('MM/DD/YYYY'),
      endDate: moment(dates[1]).format('MM/DD/YYYY')
    })
    setYearRange('')
  }

  return (
    <div className="hpi-dashboard-main-container">
      <div className="controls">
        <RangePicker
          onChange={onRangePickerChange as any}
          value={[moment(dates.startDate), moment(dates.endDate)]}
        />
        <YearRangeSelect
          yearRange={yearRange}
          onYearRangeSelect={onYearRangeSelect}
        />
      </div>
      <div className="charts">
        <Hpi
          startDate={dates.startDate}
          endDate={dates.endDate}
          range={yearRange}
          locations={locations}
        />
        <div style={{ flex: 1 }}>Data Date Indicator</div>
        <div style={{ flex: 1 }}>AHPA</div>
      </div>
    </div>
  )
}
