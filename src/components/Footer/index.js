import React from "react"
import { Link } from "gatsby"

import "./index.scss"

export default () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  )
}
