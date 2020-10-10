import React from "react"
import classNames from "classnames"

import "./index.scss"

export default ({ item, shortened }) => {
  return (
    <div className="news-item">
      <span className="news-item__date">{item.date}</span>
      <h2 className="news-item__title">{item.title}</h2>
      <div
        className={classNames([
          "news-item__text",
          shortened && "news-item__text--shortened",
        ])}
        dangerouslySetInnerHTML={{ __html: item.richText }}
      ></div>
    </div>
  )
}
