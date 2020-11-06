import React, { useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'

interface Props {
  range: string
  startDate: Date
  endDate: Date
}

export const DateIndicator: React.FC<Props> = ({
  range,
  startDate,
  endDate
}) => {
  const endYear = new Date().getFullYear()
  const startYear = endYear - 10

  const getData = () => {
    let i
    const data = []
    for (i = startYear; i <= endYear; i++) {
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
        ? new Date(startYear, 0o1, 0o1)
        : range === '10yr'
        ? new Date(endYear - 10, 0o1, 0o1)
        : range === '5yr'
        ? new Date(endYear - 5, 0o1, 0o1)
        : range === '1yr'
        ? new Date(endYear - 1, 0o1, 0o1)
        : new Date()
    } else {
      return new Date(startDate)
    }
  }

  const getEndDate = () => {
    if (range) {
      return new Date()
    } else return new Date(endDate)
  }

  useEffect(() => {
    const chart = am4core.create('date-indicator-chart', am4charts.XYChart)
    chart.data = getData()
    chart.paddingTop = 0
    chart.paddingBottom = 0
    chart.marginTop = 0
    chart.marginBottom = 0
    const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.startLocation = 0
    dateAxis.endLocation = 0
    dateAxis.renderer.grid.template.disabled = true
    dateAxis.renderer.labels.template.location = 0.0001
    dateAxis.renderer.labels.template.dy = 10
    dateAxis.renderer.labels.template.fontSize = 10
    dateAxis.renderer.inside = true
    dateAxis.renderer.minGridDistance = 5

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.max = 50
    valueAxis.min = 0
    valueAxis.strictMinMax = true
    valueAxis.renderer.labels.template.disabled = true
    valueAxis.renderer.grid.template.disabled = true

    // Create series
    const series = chart.series.push(new am4charts.LineSeries())
    series.dataFields.valueY = 'value'
    series.dataFields.dateX = 'date'
    series.name = 'Sales'
    series.strokeWidth = 0

    const range = dateAxis.createSeriesRange(series)
    range.date = new Date(getStartDate())
    range.endDate = new Date(getEndDate())
    range.contents.stroke = am4core.color('#00BAB3')
    range.contents.fill = am4core.color('#00BAB3')
    range.contents.fillOpacity = 0.15
  })

  return (
    <div className="date-indicator-container">
      <div className="date-indicator-chart"></div>
    </div>
  )
}
