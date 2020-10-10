import React from "react"
import classNames from "classnames"

import ButtonExpander from "../ButtonExpander"

import "./index.scss"

export default class index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  toggleState() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { heading, headingId, children } = this.props
    return (
      <div className="foldable-section">
        <h2
          className={classNames(["foldable-section__heading"])}
          id={headingId}
        >
          <span
            className="foldable-section__heading__inner theme-background"
            onClick={() => {
              this.toggleState()
            }}
          >
            {heading}{" "}
            <ButtonExpander big closed={!this.state.isOpen} isBlank={true} />
          </span>
        </h2>
        <div
          className={classNames([
            "foldable-section__content",
            this.state.isOpen && "foldable-section__content--open",
          ])}
        >
          {children}
        </div>
      </div>
    )
  }
}
