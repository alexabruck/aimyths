import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

import LayoutBase from "../LayoutBase"
import Header from "../Header"
import Footer from "../Footer"

import "./index.scss"

const Layout = ({ children, dark, hideLogo }) => {
  return (
    <LayoutBase>
      <div className={classnames(["layout", dark && "layout--dark"])}>
        <Header hideLogo={hideLogo} dark />
        <div className="layout__inner">
          <main className="layout__inner__main">{children}</main>
        </div>
        <Footer />
      </div>
    </LayoutBase>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
