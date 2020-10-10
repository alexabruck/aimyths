import React from "react"
import classNames from "classnames"

import ButtonClose from "../../ButtonClose"
import ButtonExpander from "../../ButtonExpander"

import "./index.scss"

export default class index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      isHovered: false,
    }
  }

  toggleOpen() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  toggleHovered() {
    this.setState({ isHovered: !this.state.isHovered })
  }

  render() {
    const { text, children } = this.props
    return (
      <div className="rich-link">
        <span
          className={classNames([
            "rich-link__text",
            "theme-underline",
            this.state.isOpen && "theme-background rich-link__text--open",
          ])}
          onClick={() => {
            this.toggleOpen()
          }}
          onMouseEnter={() => {
            this.toggleHovered()
          }}
          onMouseLeave={() => {
            this.toggleHovered()
          }}
        >
          {text}
          <ButtonExpander
            style={{ marginLeft: "4px", padding: 0 }}
            className={
              !this.state.isHovered && !this.state.isOpen && "theme-fill"
            }
            closed={!this.state.isOpen}
            onClick={() => {
              this.toggleOpen()
            }}
          />
        </span>

        <div
          className={classNames([
            "rich-link__explanatory-box theme-background",
            this.state.isOpen && "rich-link__explanatory-box--open",
          ])}
        >
          <div className="rich-link__explanatory-box__closeicon">
            <ButtonClose
              onClick={() => {
                this.setState({ isOpen: false })
              }}
            />
          </div>

          <div className="rich-link__explanatory-box__inner"> {children}</div>
        </div>
      </div>
    )
  }
}
