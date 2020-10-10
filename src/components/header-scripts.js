import React from "react"
import { Helmet } from "react-helmet"

export default () => {
  return (
    <Helmet>
      <link
        rel="stylesheet"
        href="https://code.cdn.mozilla.net/fonts/zilla-slab.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Niramit:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}
