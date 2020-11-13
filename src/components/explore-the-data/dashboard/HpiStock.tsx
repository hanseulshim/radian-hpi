import React, { useEffect, useState } from 'react'
import { dashboardHpiStock } from 'api'

interface Props {
  cohorts: string[]
}
interface Stock {
  label: string
  value: string
}

export const HpiStock: React.FC<Props> = ({ cohorts }) => {
  const [stocks, setStocks] = useState<Stock[]>([])
  useEffect(() => {
    const getHpi = async () => {
      const stocksResult = await dashboardHpiStock(cohorts)

      setStocks(stocksResult)
    }
    getHpi()
  }, [cohorts])

  const max = Math.max(...stocks.map(stock => +stock.value))

  return (
    <div className="hpi-stock-container">
      <div className="title">Home Price Index</div>
      {stocks.map((stock, index) => (
        <div className="bar-container" key={index}>
          <div
            className={`bar color-${index}`}
            style={{ width: `${(+stock.value * 100) / (max * 1.25)}%` }}
          />
          <div className="value">{stock.value}</div>
        </div>
      ))}
    </div>
  )
}

export default HpiStock
