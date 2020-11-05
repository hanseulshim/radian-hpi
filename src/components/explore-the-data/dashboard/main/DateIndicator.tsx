import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'

interface Props {
  range: string
  dates: {
    startDate: string
    endDate: string
  }
}

export const DateIndicator: React.FC<Props> = ({ range, dates }) => {
  const endDate = new Date().getFullYear()
  const startDate = endDate - 10

  const getData = () => {
    let i
    const data = []
    for (i = startDate; i <= endDate; i++) {
      data.push({
        value: 50,
        date: new Date(i, 0o1, 0o1)
      })
    }
    return data
  }

  const getStartDate = () => {
    if (range) {
      return range === 'All'
        ? new Date(startDate, 0o1, 0o1)
        : range === '10yr'
        ? new Date(endDate - 10, 0o1, 0o1)
        : range === '5yr'
        ? new Date(endDate - 5, 0o1, 0o1)
        : range === '1yr'
        ? new Date(endDate - 1, 0o1, 0o1)
        : new Date()
    } else {
      return new Date(dates.startDate)
    }
  }

  const getEndDate = () => {
    if (range) {
      return new Date()
    } else return new Date(dates.endDate)
  }

  useEffect(() => {
    const chart = am4core.create('date-indicator-container', am4charts.XYChart)
    chart.data = getData()
    chart.paddingTop = 0
    chart.paddingBottom = 0
    chart.marginTop = 0
    chart.marginBottom = 0
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.startLocation = 0.5
    dateAxis.endLocation = 0
    dateAxis.renderer.grid.template.disabled = true
    dateAxis.renderer.labels.template.location = 0.0001
    dateAxis.renderer.inside = true
    dateAxis.renderer.minGridDistance = 20

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.max = 50
    valueAxis.strictMinMax = true
    valueAxis.renderer.labels.template.disabled = true
    valueAxis.renderer.grid.template.disabled = true
    valueAxis.renderer.labels.template.fontSize = 14

    // Create series
    const series = chart.series.push(new am4charts.LineSeries())
    series.dataFields.valueY = 'value'
    series.dataFields.dateX = 'date'
    series.name = 'Sales'
    series.strokeWidth = 0

    const range = dateAxis.createSeriesRange(series)
    range.date = new Date(getStartDate())
    range.endDate = new Date(getEndDate())
    range.contents.stroke = am4core.color('#f0FFFE')
    range.contents.fill = am4core.color('#f0FFFE')
    range.contents.fillOpacity = 0.9
  })

  return (
    <div className="date-indicator-container" style={{ height: '100px' }}></div>
  )
}
