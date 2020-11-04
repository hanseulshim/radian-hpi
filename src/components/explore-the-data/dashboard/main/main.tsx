import React, { useContext, useState } from 'react'
import { ContentContext } from 'components/App'
import { useCookies } from 'react-cookie'
import { DatePicker } from 'antd'
import { YearRangeSelect } from './YearRangeSelect'
import moment from 'moment'

const { RangePicker } = DatePicker

interface Props {}

export const Main: React.FC<Props> = () => {
  const [cookies] = useCookies(['wizardSelections'])
  const { wizardSelections } = cookies
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
    </div>
  )
}
