import React from "react"
import classNames from "classnames"

import "./index.scss"

export default ({ big, closed, className, ...props }) => {
  return (
    <button
      {...props}
      className={classNames([
        "button-expander",
        closed && "button-expander--closed",
      ])}
    >
      <span className="button-expander__inner">
        <svg
          width="14px"
          height="10px"
          viewBox="0 0 14 10"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className={big && "button-exander--big__svg"}
        >
          <g
            id="icon/expansion-box-arrow"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <rect
              className={className}
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
    </button>
  )
}
