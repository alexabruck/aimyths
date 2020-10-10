import React from "react"
import HeaderScripts from "./header-scripts"

import "modern-css-reset/dist/reset.min.css"
import "../css/global-style.scss"

export default ({ children }) => {
  return (
    <>
      <HeaderScripts />
      {children}
    </>
  )
}
