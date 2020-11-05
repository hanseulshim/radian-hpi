import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { dashboardHpi } from 'api'

interface Geo {
  location: string
  type: string
}

interface Props {
  startDate: string | null
  endDate: string | null
  range: string | null
  locations: Geo[]
}

export const Hpi: React.FC<Props> = ({
  startDate,
  endDate,
  range,
  locations
}) => {
  const [cookies] = useCookies(['wizardSelections'])
  const { wizardSelections } = cookies
  const [dataOption, setDataOption] = useState('HPI')

  useEffect(() => {
    const buildChart = async () => {
      let chart = am4core.create('hpi-chart', am4charts.XYChart)
      if (locations.length) {
        const data = await dashboardHpi({
          startDate: !range ? startDate : null,
          endDate: !range ? endDate : null,
          range,
          locations
        })
        chart.data = data
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis())
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())

        const createSeries = (
          name: string,
          data: Array<{ date: string; hpi: number; median: number }>,
          index: number
        ) => {
          let series = chart.series.push(new am4charts.LineSeries())
          series.dataFields.valueY = 'hpi'
          series.dataFields.dateX = 'date'
          series.name = name
          series.data = data
          const colors = [
            '#002b49',
            '#00bab3',
            '#ffc882',
            '#9bb9b4',
            '#820933',
            '#fa7268z'
          ]
          series.stroke = am4core.color(colors[index])

          return series
        }

        chart.data.forEach((cohort, index) =>
          createSeries(cohort.label, cohort.data, index)
        )
      }
    }
    buildChart()
  }, [endDate, locations, range, startDate])
  return (
    <div className="hpi-chart-container" style={{ height: '400px' }}>
      <div className="title-and-controls">
        <h5>Home Price Index (HPI)</h5>
        <div className="hpi-controls">
          <div
            className={`hpi-option ${dataOption === 'HPI' ? 'selected' : ''}`}
            onClick={() => setDataOption('HPI')}
          >
            HPI
          </div>
          <div
            className={`hpi-option ${
              dataOption === 'Median Value' ? 'selected' : ''
            }`}
            onClick={() => setDataOption('Median Value')}
          >
            Median Value
          </div>
        </div>
      </div>
      <div className="hpi-chart" style={{ height: '100%' }} />
    </div>
  )
}
