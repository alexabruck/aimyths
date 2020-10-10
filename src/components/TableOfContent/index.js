import React from "react"
import "./index.scss"

export default ({ children }) => {
  return (
    <nav className="tableofcontent">
      <h2 className="tableofcontent__header">Table of contents</h2>
      {children}

      <a
        className="tableofcontent_backtotop"
        href="#"
        onClick={e => {
          e.preventDefault()
          window.scrollTo(0, 0)
        }}
      >
        Back to top
      </a>
    </nav>
  )
}
