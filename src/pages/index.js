import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Player from "../components/player"
import Image from "../components/image"
import SEO from "../components/seo"

const audio = new Audio(
  "http://kure-network.stuorg.iastate.edu:8000/TheBasement"
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Player />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
  </Layout>
)

export default IndexPage
