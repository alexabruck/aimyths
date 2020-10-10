import React from "react"
import JellyList from "../JellyList"

import "./index.scss"

export default () => {
  return (
    <div className="dosdonts">
      <div className="dosdonts__side">
        <h3>Do's</h3>
        <div className="dosdonts__side__wrapper--left">
          <JellyList
            inverted={true}
            itemHeight="53px"
            itemDistance="10px"
            arrowWidth="74px"
            listClassName="dosdonts__side__list--left"
            litemClassName=""
            itemClassName="dosdonts__dos-bg"
          >
            <div className="dosdonts__item">Be careful with what “AI” is</div>
            <div className="dosdonts__item">
              Make clear what role humans have to play
            </div>
            <div className="dosdonts__item">
              Emphasize the narrowness of today’s AI-powered programs
            </div>
            <div className="dosdonts__item">
              Avoid comparisons to pop culture depictions of AI
            </div>
            <div className="dosdonts__item">
              Make clear what the task is, precisely
            </div>
            <div className="dosdonts__item">Call out limitations</div>
            <div className="dosdonts__item">
              Present advancements in context
            </div>
          </JellyList>
        </div>
      </div>
      <div className="dosdonts__side">
        <h3>Dont's</h3>
        <div className="dosdonts__side__wrapper--right">
          <JellyList
            inverted={false}
            itemHeight="93px"
            itemDistance="10px"
            arrowWidth="74px"
            listClassName="dosdonts__side__list--right"
            litemClassName=""
            itemClassName="dosdonts__donts-bg"
          >
            <div className="dosdonts__item">
              Imply autonomy where there is none
            </div>
            <div className="dosdonts__item">
              State programs “learn” without appropriate caveats
            </div>
            <div className="dosdonts__item">
              Cite opinions of famous smart people who don’t work on AI
            </div>
            <div className="dosdonts__item">Ignore the failures</div>
          </JellyList>
        </div>
      </div>
    </div>
  )
}
