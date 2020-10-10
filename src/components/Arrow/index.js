import React from "react"

export default ({ right, style, className }) => {
  return (
    <span
      className={className}
      style={{
        width: "30px",
        height: "30px",
        flexShrink: 0,
        transform: right && "rotate(-90deg)",
        ...style,
      }}
    >
      <svg viewBox="0 0 14 10" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g
          id="icon/expansion-box-arrow"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <rect
            className="theme-fill-light"
            fill="sasdf"
            id="Rectangle"
            x="0"
            y="0"
            width="14"
            height="10"
            rx="2"
          ></rect>
          <polygon
            id="Path-2"
            fill="#000000"
            fillRule="nonzero"
            points="10.55 2.9 11.45 4.1 7 7.4375 2.55 4.1 3.45 2.9 7 5.563"
          ></polygon>
        </g>
      </svg>
    </span>
  )
}
