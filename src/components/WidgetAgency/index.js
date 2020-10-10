import React from "react"
import classNames from "classnames"
import anime from "animejs"

import Button from "../Button"
import widgetData from "../../../content/ai-has-agency/widget-data.json"
import { shuffle } from "../../helpers"

import "./index.scss"

const data = shuffle(widgetData.data)

const effect = {
  in: {
    duration: 200,
    delay: function (_, index) {
      return index * 50
    },
    easing: "easeOutSine",
    opacity: 1,
    rotateY: [45, 0],
  },
}

function peacefulpieces(phrase) {
  return (
    <>
      {phrase.split("").map((char, i) => (
        <span key={i} style={{ opacity: 0 }}>
          {char}
        </span>
      ))}
    </>
  )
}

export default class index extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      currentIndex: 0,
      launched: false,
      animationIsComplete: false,
    }
  }

  next() {
    const nextIndex = this.state.currentIndex + 1

    this.setState(
      {
        currentIndex: nextIndex < data.length ? nextIndex : 0,
      },
      () => {
        this.state.launched && this.animate()
      }
    )
  }

  animate() {
    const letters = [].slice.call(this.myRef.current.querySelectorAll("span"))
    anime({
      targets: letters,
      ...effect.in,
      complete: () => {
        this.onAnimationComplete()
      },
    })
  }

  onAnimationComplete() {
    this.setState({ animationIsComplete: true })
  }

  render() {
    return (
      <div className="widget-agency">
        {data.map((pair, index) => {
          return (
            <div
              key={pair.original}
              className={classNames([
                "widget-agency__item",
                this.state.currentIndex !== index &&
                  "widget-agency__item--hidden",
              ])}
            >
              <div className="widget-agency__left">
                <span className="widget-agency__left__number">
                  HEADLINE #{index + 1}
                </span>
                <p className="widget-agency__left__statement">
                  {pair.original}
                </p>
                <span className="widget-agency__left__bottom">
                  Source:{" "}
                  <a
                    href={pair.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    {pair.source}
                  </a>
                </span>
              </div>
              <div className="widget-agency__right">
                <span className="widget-agency__right__number">
                  REPHRASING #{index + 1}
                </span>
                <p
                  className="widget-agency__right__statement"
                  ref={this.state.currentIndex === index && this.myRef}
                >
                  <span>{peacefulpieces(pair.rephrased)}</span>
                </p>
                {!this.state.launched && (
                  <div className="widget-agency__right__cta">
                    <Button
                      className="widget-agency__right__button"
                      onClick={() => {
                        this.setState({ launched: true })
                        this.animate()
                      }}
                    >
                      Debunk the headline
                    </Button>
                  </div>
                )}
                <span className={classNames(["widget-agency__right__bottom"])}>
                  <Button
                    onClick={() => {
                      this.next()
                    }}
                  >
                    Next →
                  </Button>
                </span>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
