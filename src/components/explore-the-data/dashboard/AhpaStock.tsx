import React, { useEffect, useState } from 'react'
import { dashboardAhpaStock } from 'api'

interface Geo {
  location: string
  type: string
}
interface Props {
  locations: Geo[]
}
interface Stock {
  label: string
  value: string
}

export const AhpaStock: React.FC<Props> = ({ locations }) => {
  const [stocks, setStocks] = useState<Stock[]>([])
  useEffect(() => {
    const getHpi = async () => {
      const stocksResult = await dashboardAhpaStock(locations)

      setStocks(stocksResult)
    }
    getHpi()
  }, [locations])

  console.log(stocks)

  const max = Math.max(...stocks.map(stock => +stock.value))
  console.log(max)

  return (
    <div className="hpi-stock-container">
      <div className="title">Annual Home Price Appreciation</div>
      {stocks.map((stock, index) => (
        <div className="bar-container" key={index}>
          <div
            className={`bar color-${index}`}
            style={{ width: `${(+stock.value * 100) / (max * 1.25)}%` }}
          />
          <div className="value">{(+stock.value * 100).toFixed(1)}%</div>
        </div>
      ))}
    </div>
  )
}

export default AhpaStock
