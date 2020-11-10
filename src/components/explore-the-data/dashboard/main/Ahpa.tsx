import React, { useState, useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'
import { dashboardAhpa } from 'api'
am4core.useTheme(am4themes_animated)

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

export const Ahpa: React.FC<Props> = ({ startDate, endDate, range, geos }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await dashboardAhpa({
        startDate: !range ? startDate : null,
        endDate: !range ? endDate : null,
        range: range || null,
        locations: geos
      })
      setData(data)
    }
    getData()
  }, [endDate, geos, range, startDate])

  useEffect(() => {
    let chart = am4core.create('ahpa-chart', am4charts.XYChart)
    chart.paddingLeft = 0
    chart.paddingRight = 20

    chart.data = data
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis())
    dateAxis.startLocation = 0.5
    dateAxis.endLocation = 0
    dateAxis.renderer.minGridDistance = 50
    dateAxis.renderer.labels.template.location = 0.0001
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
    valueAxis.renderer.minGridDistance = 20
    valueAxis.renderer.labels.template.adapter.add(
      'text',
      (text: any, label: any) => {
        const sign =
          label.dataItem.value > 0 ? '+' : label.dataItem.value < 0 ? '-' : ''
        return sign + label.dataItem.value + '%'
      }
    )
    let axisTooltip = valueAxis.tooltip as any
    axisTooltip.background.fill = am4core.color('#00bab3')
    axisTooltip.background.strokeWidth = 0
    axisTooltip.background.cornerRadius = 3
    axisTooltip.background.pointerLength = 0
    valueAxis.adapter.add('getTooltipText', (text: any) => {
      return `Annual % Change: ` + text
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
      series.dataFields.valueY = 'value'
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
      series.fill = am4core.color(colors[index])
      series.fillOpacity = 0.25

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
    <div className="ahpa-chart-container">
      <h5>Annualized Home Price Appreciation</h5>
      <div className="ahpa-chart" />
    </div>
  )
}
