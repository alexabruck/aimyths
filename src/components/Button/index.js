import React from "react"
import classNames from "classnames"

import "./index.scss"

export default ({ to, children, className, ...props }) => {
  return (
    <button {...props} className={classNames(["button"], className)}>
      {children}
    </button>
  )
}
