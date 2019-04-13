import React from "react"

const audio = new Audio(
  "http://kure-network.stuorg.iastate.edu:8000/TheBasement"
)

const Player = () => (
  <h1
    onClick={() => {
      audio.play()
      console.log("test")
    }}
  >
    Player
  </h1>
)

export default Player
