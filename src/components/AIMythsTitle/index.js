import React from "react"
import classNames from "classnames"

import "./index.css"

export default ({ slim }) => {
  return (
    <span
      className={classNames(["aimyths-title", slim && "aimyths-title--slim"])}
    >
      AI&nbsp;Myths
    </span>
  )
}
