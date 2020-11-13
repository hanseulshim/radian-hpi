import React, { useState, useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'

import { dashboardHpi } from 'api'
am4core.options.commercialLicense = true

interface Props {
  startDate: Date
  endDate: Date
  range: string | null
  cohorts: string[]
}

export const MedianValue: React.FC<Props> = ({
  startDate,
  endDate,
  range,
  cohorts
}) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await dashboardHpi({
        startDate: !range ? startDate : null,
        endDate: !range ? endDate : null,
        range: range || null,
        cohorts
      })
      setData(data)
    }
    getData()
  }, [endDate, cohorts, range, startDate])

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
    valueAxis.numberFormatter.numberFormat = '$#a'

    let axisTooltip = valueAxis.tooltip as any
    axisTooltip.background.fill = am4core.color('#00bab3')
    axisTooltip.background.strokeWidth = 0
    axisTooltip.background.cornerRadius = 3
    axisTooltip.background.pointerLength = 0
    valueAxis.adapter.add('getTooltipText', text => {
      return 'Median Value: ' + text
    })

    chart.cursor = new am4charts.XYCursor()
    chart.cursor.behavior = 'panXY'
    chart.cursor.xAxis = dateAxis

    const createSeries = (
      name: string,
      data: Array<{ date: string; hpi: number; median: number }>,
      index: number
    ) => {
      let series = chart.series.push(new am4charts.LineSeries())
      series.dataFields.valueY = 'median'
      series.dataFields.dateX = 'date'
      series.name = name
      series.data = data
      const colors = [
        '#002b49',
        '#00bab3',
        '#ffc882',
        '#9bb9b4',
        '#820933',
        '#fa7268'
      ]
      series.stroke = am4core.color(colors[index])
      series.strokeWidth = 2.5
      series.tensionX = 0.9
      series.tooltipText = '{valueY}'
      if (series.tooltip) {
        series.tooltip.getFillFromObject = false
        series.tooltip.background.fill = am4core.color(colors[index])
      }

      return series
    }

    chart.data.forEach((cohort, index) =>
      createSeries(cohort.label, cohort.data, index)
    )

    return () => {
      chart.dispose()
    }
  }, [data])
  return (
    <div className="hpi-chart-container">
      <div className="hpi-chart" style={{ height: '100%' }} />
    </div>
  )
}
