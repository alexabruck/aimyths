import React from "react"
import classNames from "classnames"

import "./index.scss"

export default ({ children, className }) => {
  return (
    <div
      className={classNames([
        "call-to-action theme-background-box-gradient",
        className,
      ])}
    >
      {children}{" "}
      <svg
        className="call-to-action__triangle"
        width="40"
        height="37"
        viewBox="0 0 40 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.5 37H0.5L40 0.5L25.5 37Z"
          fill="#C4C4C4"
          className="theme-fill"
        />
      </svg>
    </div>
  )
}
