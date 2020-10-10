import React from "react"

import "./index.scss"

export default props => {
  return (
    <button {...props} className="button-close">
      <span className="button-close__inner"></span>
    </button>
  )
}
