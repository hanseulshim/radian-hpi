import React from 'react'

interface Props {
  yearRange: string
  onYearRangeSelect: (yearRange: string) => void
}

export const YearRangeSelect: React.FC<Props> = ({
  yearRange,
  onYearRangeSelect
}) => {
  const options = ['1yr', '5yr', '10yr', 'All']
  return (
    <div className="year-select-container">
      {options.map((opt, idx) => {
        return (
          <div
            className={`option ${yearRange === opt ? 'selected' : ''}`}
            onClick={() => onYearRangeSelect(opt)}
            key={opt}
          >
            {opt}
          </div>
        )
      })}
    </div>
  )
}
