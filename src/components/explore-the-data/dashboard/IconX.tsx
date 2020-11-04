import React from 'react'
interface Props {
  className: string
  onClick(event: React.MouseEvent<SVGSVGElement, MouseEvent>): void
}
const IconX: React.FC<Props> = ({ className, onClick }) => (
  <svg
    width="16px"
    height="15px"
    viewBox="0 0 16 15"
    version="1.1"
    className={`icon-x ${className}`}
    onClick={onClick}
  >
    <line
      y1="-1.5"
      x2="16.9706"
      y2="-1.5"
      transform="matrix(-0.707107 0.707107 0.707107 0.707107 15 3)"
      strokeWidth="3"
    />
    <line x1="2.06066" y1="1.93934" x2="14.0607" y2="13.9393" strokeWidth="3" />
  </svg>
)

export default IconX
