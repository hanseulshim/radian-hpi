import React, { useContext, useState } from 'react'
import { DatePicker } from 'antd'
import { YearRangeSelect } from './YearRangeSelect'
import moment from 'moment'
import { Hpi } from './Hpi'
import { DateIndicator } from './DateIndicator'
import { Ahpa } from './Ahpa'

const { RangePicker } = DatePicker

interface Geo {
  location: string
  type: string
}
interface Props {
  geos: Geo[]
}

export const Main: React.FC<Props> = ({ geos }) => {
  const [yearRange, setYearRange] = useState('All')
  const [dates, setDates] = useState({
    startDate: moment(new Date(2011, 0o1, 0o1)).format('MM/DD/YYYY'),
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
    <>
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
      <Hpi
        startDate={dates.startDate}
        endDate={dates.endDate}
        range={yearRange}
        geos={geos}
      />
      <DateIndicator range={yearRange} dates={dates} />
      <Ahpa
        startDate={dates.startDate}
        endDate={dates.endDate}
        range={yearRange}
        geos={geos}
      />
    </>
  )
}
