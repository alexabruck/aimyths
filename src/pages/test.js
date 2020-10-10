import React from "react"
import LayoutArticle from "../components/LayoutArticle"
import WidgetAmbiguity from "../components/WidgetAmbiguity"
import DosDonts from "../components/DosDonts"

export default () => {
  return (
    <LayoutArticle>
      <div className="layout-article--theme-defining">
        <DosDonts />
        <WidgetAmbiguity />
      </div>
    </LayoutArticle>
  )
}
