import React from "react"
import { Link } from "gatsby"

import BaseLayout from "../components/LayoutBase"
import AIMythsFrontPageTitle from "../components/AIMythsFrontPageTitle"

const NotFoundPage = () => (
  <BaseLayout>
    <div
      style={{
        backgroundColor: "#0d072e",
        color: "white",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AIMythsFrontPageTitle />
      <h1 style={{ margin: 0, marginTop: "50px", fontWeight: "300" }}>
        Full text will be available on Wednesday 29th of July
      </h1>
      <p>In the meanwhile, check out the first three released articles:</p>
      <div
        style={{
          textDecoration: "underline",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Link to="/ai-has-agency">AI has agency</Link>
        <Link to="/ai-equals-shiny-humanoid-robots">
          AI = shiny humanoid robots
        </Link>
        <Link to="/the-term-ai-has-a-clear-meaning">
          The term AI has a clear meaning
        </Link>
      </div>
    </div>
  </BaseLayout>
)

export default NotFoundPage
