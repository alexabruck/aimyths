import React from "react"
import classNames from "classnames"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import AIMythsTitle from "../AIMythsTitle"
import "./index.css"

const Header = ({ children, hideLogo, fixed, dark, slim }) => {
  const nav = (
    <nav
      className={classNames(["header__nav", fixed && "header__nav--compact"])}
    >
      <Link className="header__nav__nav-item" to="/news">
        News
      </Link>
      <Link className="header__nav__nav-item" to="/about">
        About
      </Link>
    </nav>
  )
  return (
    <header
      className={classNames([
        "header",
        fixed && "header--fixed",
        dark && "header--dark",
        slim && "header--slim",
      ])}
    >
      <div className="header__inner">
        <div
          className={classNames(["header__top", slim && "header__top--slim"])}
        >
          {!hideLogo && (
            <Link className="header__logo-link" to="/">
              <AIMythsTitle slim={slim} />
            </Link>
          )}
          <div className="header__top__children"> {children}</div>
          {nav}
        </div>
        <div className="header__bottom">{children}</div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
