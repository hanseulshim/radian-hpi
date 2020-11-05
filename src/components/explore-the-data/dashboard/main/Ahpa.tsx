import React, { useState, useEffect } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { dashboardAhpa } from 'api'

interface Geo {
  location: string
  type: string
}

interface Props {
  startDate: string | null
  endDate: string | null
  range: string | null
  geos: Geo[]
}

export const Ahpa: React.FC<Props> = ({ startDate, endDate, range, geos }) => {
  useEffect(() => {
    let chart = am4core.create('ahpa-chart', am4charts.XYChart)
    const buildChart = async () => {
      if (geos.length) {
        const data = await dashboardAhpa({
          startDate: !range ? startDate : null,
          endDate: !range ? endDate : null,
          range: range || null,
          locations: geos
        })
        chart.data = data
        let dateAxis = chart.xAxes.push(new am4charts.DateAxis())
        dateAxis.startLocation = 0.5
        dateAxis.endLocation = 0.5
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
        valueAxis.renderer.minGridDistance = 20

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
      }
    }
    buildChart()
    return () => {
      chart.dispose()
    }
  }, [endDate, geos, range, startDate])
  return (
    <>
      <h5>Home Price Index (HPI)</h5>
      <div className="ahpa-chart" />
    </>
  )
}
