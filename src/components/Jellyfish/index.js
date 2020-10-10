import React from "react"
import classNames from "classnames"
import { Link } from "gatsby"

import contentStructure from "../../content-structure"
import AIMythsFrontPageTitle from "../AIMythsFrontPageTitle"
import JellyList from "../JellyList"
import Arrow from "../Arrow"

import "./index.scss"

export default class index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { selectedTopic: null, selectedMyth: null }
    this.refMythList = React.createRef()
  }

  handleTopicSelect = value => {
    this.setState({ selectedTopic: value })
    this.refMythList.current.scrollIntoView({
      block: "center",
      behavior: "smooth",
    })
  }

  handleMythHover = (mythlink, mythTopicId) => {
    this.setState({ selectedTopic: mythTopicId })
    this.setState({ selectedMyth: mythlink })
  }

  isUnselected = (mythTopic, mythLink) =>
    mythTopic !== this.state.selectedTopic ||
    (mythTopic === this.state.selectedTopic &&
      this.state.selectedMyth !== mythLink &&
      !!this.state.selectedMyth)

  render() {
    const topics = contentStructure.topics
    const myths = contentStructure.myths.filter(myth => !myth.hide)
    return (
      <div className="jellyfish">
        <div className="jellyfish__topics-list">
          <JellyList
            inverted={false}
            itemHeight="53px"
            itemDistance="15px"
            arrowWidth="100px"
            listClassName="jellyfish__topic-list-ul"
            litemClassName="jellyfish__topic-list__litem"
            itemClassName="jellyfish__topics-list__item"
          >
            {topics.map(topic => {
              const isSelected = this.state.selectedTopic === topic.id
              return (
                <div
                  className={classNames([
                    "jellyfish__list-item",
                    "jellyfish__list-item--passclass--afterparent",
                    `jellyfish__list-item--colorscheme-${topic.id}`,
                    "jellyfish__topics-list__list-item",
                    topic.id !== this.state.selectedTopic &&
                      "jellyfish__topics-list__list-item--unselected",
                  ])}
                  key={topic.title}
                >
                  <label
                    className={classNames([
                      "jellyfish__topics-list__label",
                      `jellyfish__topics-list__label--colorscheme-${topic.id}`,
                      !isSelected &&
                        "jellyfish__topics-list__label--unselected",
                    ])}
                  >
                    <input
                      className="jellyfish__list-item__input"
                      type="radio"
                      name="mythtopic"
                      checked={isSelected}
                      onChange={() => this.handleTopicSelect(topic.id)}
                    ></input>
                    {topic.title}
                  </label>
                </div>
              )
            })}
          </JellyList>
        </div>

        <div className="jellyfish__title">
          <AIMythsFrontPageTitle />
        </div>

        <div className="jellyfish__myths-list" ref={this.refMythList}>
          {
            <JellyList
              inverted={true}
              itemHeight="53px"
              itemDistance="15px"
              arrowWidth="100px"
              itemClassName="jellyfish__jellylist__item"
              litemClassName="jellyfish__myths-list__litem"
            >
              {myths.map(myth => {
                return (
                  <div
                    className={classNames([
                      "jellyfish__list-item",
                      "jellyfish__list-item--passclass--afterparent",
                      `jellyfish__list-item--colorscheme-${myth.topic}`,
                      "jellyfish__myths-list__list-item",
                      this.isUnselected(myth.topic, myth.link) &&
                        "jellyfish__myths-list__list-item--unselected",
                    ])}
                    key={myth.title}
                    onMouseEnter={() =>
                      this.handleMythHover(myth.link, myth.topic)
                    }
                    onMouseLeave={() => {
                      this.handleMythHover(null, null)
                    }}
                  >
                    <Link
                      to={myth.isDraft ? "/coming-soon" : myth.link}
                      className="jellyfish__list-item__link"
                    >
                      <div className="jellyfish__list-item__inner">
                        <span className="jellyfish__list-item__page-link">
                          {myth.title}
                        </span>
                        <Arrow
                          className="jellyfish__list-item__page-link-arrow"
                          right
                          style={{ position: "absolute", right: 0 }}
                        />
                      </div>
                    </Link>
                  </div>
                )
              })}
            </JellyList>
          }
        </div>
      </div>
    )
  }
}
