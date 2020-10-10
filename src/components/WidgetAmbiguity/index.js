import React from "react"
import Button from "../Button"
import { TextField } from "@material-ui/core"

import widgetData from "../../../content/the-term-ai-has-a-clear-meaning/widget-data.json"
import { shuffle } from "../../helpers"

import "./index.scss"

const data = shuffle(widgetData.data)

const ReplacementWord = ({ handleOnClick, word, style }) => {
  return (
    <div className="widget-ambiguity__replacement-word" style={style}>
      <Button
        style={{
          backgroundColor: "#0d072e",
          color: "white",
          border: "none",
          borderRadius: "6px",
        }}
        onClick={() => {
          handleOnClick()
        }}
      >
        {word}
      </Button>
    </div>
  )
}

export default class index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSentenceIndex: 0,
      currentReplacementIndex: null,
      userInputWord: "",
    }
  }

  next() {
    const nextIndex = this.state.currentSentenceIndex + 1
    this.setState({
      currentSentenceIndex: nextIndex < data.length ? nextIndex : 0,
      userInputWord: "",
      currentReplacementIndex: null,
    })
  }

  setCurrentReplacementIndex(i) {
    this.setState({ currentReplacementIndex: i, userInputWord: "" })
  }

  setUserInputWord(word) {
    this.setState({ userInputWord: word, currentReplacementIndex: null })
  }

  formatSentence(sentence, replacementWord) {
    if (!replacementWord) replacementWord = "artificial intelligence"
    return sentence.replace(
      /_AI_/g,
      `<span class='widget-ambiguity__headline__the-word'>${replacementWord}</span>`
    )
  }

  getCurrentSentence() {
    const item = data[this.state.currentSentenceIndex]
    const replIndex = this.state.currentReplacementIndex
    return replIndex !== null
      ? item.replacements[replIndex].sentence
      : item.sentence
  }

  getCurrentWord() {
    const item = data[this.state.currentSentenceIndex]
    const replIndex = this.state.currentReplacementIndex
    return replIndex !== null
      ? item.replacements[replIndex].word
      : this.state.userInputWord
  }

  getSource() {
    const item = data[this.state.currentSentenceIndex]
    return this.getCurrentWord()
      ? null
      : { source: item.source, sourceLink: item.sourceLink }
  }

  clearCurrentWord() {
    this.setState({ userInputWord: "", currentReplacementIndex: null })
  }

  render() {
    const attribution = this.getSource() && (
      <span>
        Source:{" "}
        <a
          href={this.getSource().sourceLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.getSource().source}
        </a>
      </span>
    )

    const resetButton = (
      <Button
        style={{ display: "inline-block", border: "none" }}
        onClick={() => {
          this.clearCurrentWord()
        }}
      >
        Reset
      </Button>
    )

    return (
      <div className="widget-ambiguity theme-background">
        <div className="widget-ambiguity__top-row">
          <span className="widget-ambiguity__top-row__number">
            #{this.state.currentSentenceIndex + 1}
          </span>
          <div className="widget-ambiguity__top-row__cta">{attribution}</div>
          <Button
            style={{ margin: 0 }}
            onClick={() => {
              this.next()
            }}
          >
            Next
          </Button>
        </div>

        <div className="widget-ambiguity__middle-row">
          <div className="widget-ambiguity__headline">
            <span
              dangerouslySetInnerHTML={{
                __html: this.formatSentence(
                  this.getCurrentSentence(),
                  this.getCurrentWord()
                ),
              }}
            ></span>
          </div>
        </div>
        <div className="widget-ambiguity__bottom-section">
          <div className="widget-ambiguity__bottom-section__user-section">
            <div className="widget-ambiguity__replacement-word">
              <TextField
                className="widget-ambiguity__text-field"
                id="standard-basic"
                label="Try your own term"
                style={{ display: "inline-block" }}
                value={this.state.userInputWord}
                onChange={({ target: { value } }) => {
                  this.setUserInputWord(value)
                }}
              />
            </div>
            {!!this.state.userInputWord && resetButton}
          </div>
          <div className="widget-ambiguity__bottom-section__buttons-section">
            {data[this.state.currentSentenceIndex].replacements.map(
              ({ word }, i) => {
                return (
                  <ReplacementWord
                    word={word}
                    handleOnClick={() => {
                      this.setCurrentReplacementIndex(i)
                    }}
                  />
                )
              }
            )}{" "}
            {resetButton}
          </div>
        </div>
      </div>
    )
  }
}
