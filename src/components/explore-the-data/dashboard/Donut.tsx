import React, { useEffect, useState } from 'react'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import { dashboardDonut } from 'api'

interface Props {
  cohorts: string[]
}
interface Donut {
  label: string
  value: string
}

const colors = [
  '#002b49',
  '#00bab3',
  '#ffc882',
  '#9bb9b4',
  '#820933',
  '#fa7268'
]

export const Donut: React.FC<Props> = ({ cohorts }) => {
  const [title, setTitle] = useState<string>('')
  const [value, setValue] = useState<number | null>(null)
  useEffect(() => {
    const getHpi = async () => {
      const donutResult = await dashboardDonut(cohorts)

      setTitle(donutResult.title)
      setValue(donutResult.value)

      const chart = am4core.create('chartdiv', am4charts.PieChart)

      // Add data
      chart.data = donutResult.data.map((data: any, index: any) => ({
        ...data,
        color: colors[index]
      }))

      // Add label
      chart.radius = am4core.percent(55)
      chart.innerRadius = 50

      // Add and configure Series
      const pieSeries = chart.series.push(new am4charts.PieSeries())
      pieSeries.slices.template.tooltipText = `{category}\n{value.percent.formatNumber('#.0')}% ({value.value})`
      pieSeries.dataFields.value = 'value'
      pieSeries.dataFields.category = 'label'
      pieSeries.labels.template.text = '{value}'
      pieSeries.slices.template.propertyFields.fill = 'color'
      pieSeries.slices.template.stroke = am4core.color('#FFF')
      pieSeries.slices.template.strokeWidth = 2
    }
    getHpi()
  }, [cohorts])

  return (
    <div className="donut-container">
      <h4>Address Count</h4>
      <div id="chartdiv" />
      <div className="total">
        <div className="title">{title}</div>
        <div className="value">{value?.toLocaleString()}</div>
      </div>
    </div>
  )
}

export default Donut
