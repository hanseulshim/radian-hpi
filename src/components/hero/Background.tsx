import React from 'react'

interface Props {}

export const Background: React.FC<Props> = () => {
  return (
    <svg
      width="1440"
      height="1014"
      viewBox="0 0 600 1014"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-811.22 226.057C-799.88 169.374 -759.83 113.963 -704.06 77.6948L-184.291 -260.366L2456.22 -260.366L1271.22 510.385L1269.61 511.41L577.82 961.35C490.08 1018.36 389.5 1029.45 321.24 989.5L-760.08 357.181C-803.61 331.598 -822.56 282.74 -811.22 226.057Z"
        fill="url(#paint0_linear)"
        fillOpacity="0.7"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="804"
          y1="10"
          x2="804"
          y2="874"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#67B5B1" stopOpacity="0.9" />
          <stop offset="0.786458" stopColor="#66D6D1" stopOpacity="0.39" />
          <stop offset="1" stopColor="#67B5B1" stopOpacity="0.17" />
        </linearGradient>
      </defs>
    </svg>
  )
}
