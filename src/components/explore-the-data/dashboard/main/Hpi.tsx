import React, { useState, useEffect, useRef } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

import { dashboardHpi } from 'api'
am4core.useTheme(am4themes_animated)
am4core.options.commercialLicense = true

interface Geo {
  location: string
  type: string
}

interface Props {
  startDate: Date
  endDate: Date
  range: string | null
  geos: Geo[]
}

export const Hpi: React.FC<Props> = ({ startDate, endDate, range, geos }) => {
  const [dataOption, setDataOption] = useState('hpi')
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await dashboardHpi({
        startDate: !range ? startDate : null,
        endDate: !range ? endDate : null,
        range: range || null,
        locations: geos
      })
      setData(data)
    }
    getData()
  }, [endDate, geos, range, startDate, dataOption])

  useEffect(() => {
    let chart = am4core.create('hpi-chart', am4charts.XYChart)

    chart.data = data
    chart.paddingLeft = 0

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.startLocation = 0.5
    dateAxis.endLocation = 0
    dateAxis.renderer.minGridDistance = 50
    dateAxis.renderer.labels.template.location = 0.0001
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())

    const createSeries = (
      name: string,
      data: Array<{ date: string; hpi: number; median: number }>,
      index: number
    ) => {
      let series = chart.series.push(new am4charts.LineSeries())
      series.dataFields.valueY = dataOption
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
      series.strokeWidth = 2.5
      series.tensionX = 0.9

      return series
    }

    chart.data.forEach((cohort, index) =>
      createSeries(cohort.label, cohort.data, index)
    )

    return () => {
      chart.dispose()
    }
  }, [data, dataOption])
  return (
    <div className="hpi-chart-container">
      <div className="title-and-controls">
        <h5>Home Price Index (HPI)</h5>
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
      <div className="hpi-chart" style={{ height: '100%' }} />
    </div>
  )
}
