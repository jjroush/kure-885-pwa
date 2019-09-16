import React from "react"

import Layout from "../components/layout"
// import Player from "../components/player"
import Image from "../components/image"
import SEO from "../components/seo"
import { useState, useEffect } from "react"

function IndexPage() {
  const [song, setSong] = useState(0)

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080")

    ws.onmessage = event => {
      setSong(JSON.parse(event.data))
      console.log(event.data)
    }
  }, [])

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {/* <Player /> */}
      <div
        style={{
          maxWidth: `100%`,
          marginBottom: `1.45rem`,
          display: `flex`,
          flexDirection: `row`,
        }}
      >
        {song != 0 && (
          <>
            <img src={song.spotify.image} />
            <div style={{ marginLeft: `35px` }}>
              <h2>{song.spotify.title}</h2>
              <h3>{song.spotify.artist}</h3>
              <a href={song.spotify.url}>{"Show on spotfiy"}</a>
              <p>{song.raw}</p>
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
