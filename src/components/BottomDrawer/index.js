import React from "react"
import classNames from "classnames"

import Button from "../Button"
import ButtonClose from "../ButtonClose"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"

import "./index.scss"

export default class index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  targetRef = React.createRef()
  targetElement = null

  toggleState() {
    if (this.state.isOpen) {
      this.setState({ isOpen: false })
      enableBodyScroll(this.targetElement)
    } else {
      this.setState({ isOpen: true })
      disableBodyScroll(this.targetElement)
    }
  }

  componentDidMount() {
    // 3. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
    // Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
    // This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
    this.targetElement = this.targetRef.current
  }

  componentWillUnmount() {
    // 5. Useful if we have called disableBodyScroll for multiple target elements,
    // and we just want a kill-switch to undo all that.
    // OR useful for if the `hideTargetElement()` function got circumvented eg. visitor
    // clicks a link which takes him/her to a different page within the app.
    clearAllBodyScrollLocks()
  }

  render() {
    const { children, buttonText, hidden, onClick } = this.props
    return (
      <div
        ref={this.targetRef}
        className={classNames([
          "bottom-drawer",
          this.state.isOpen && "bottom-drawer--open",
          hidden && !this.state.isOpen && "bottom-drawer--hidden",
        ])}
      >
        <div
          onClick={() => {
            this.toggleState()
          }}
          className={classNames([
            "bottom-drawer__content",
            this.state.isOpen && "bottom-drawer__content--open",
          ])}
        >
          <div className="bottom-drawer__content__close-button">
            <ButtonClose />
          </div>
          <div className="bottom-drawer__content__inner">{children}</div>
        </div>
        <div className="bottom-drawer__button">
          <Button
            style={{
              color: "white",
              fontStyle: "normal",
              width: "auto",
              fontSize: "14px",
              padding: "0 20px",
              margin: 0,
              fontFamily: "Niramit, sans-serif",
            }}
            onClick={() => {
              this.toggleState()
              onClick()
            }}
          >
            {this.state.isOpen ? "Close" : buttonText}
          </Button>
        </div>
      </div>
    )
  }
}
