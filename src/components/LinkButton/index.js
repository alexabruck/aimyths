import React from "react"
import { Link } from "gatsby"

import "./index.scss"

export default ({ to, children }) => {
  return (
    <Link className="link-button" to={to}>
      {children}
    </Link>
  )
}
