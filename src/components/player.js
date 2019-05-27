import React from "react"

const audio = new Audio(
  "http://kure-network.stuorg.iastate.edu:8000/TheBasement"
)

const meta = () => {
  fetch("http://kure-network.stuorg.iastate.edu:8000/TheBasement").then(
    function(response) {
      if (response.status !== 200) {
        console.log("Problem in fetching")
        return
      }
      response.text().then(function(data) {
        console.log(data)
      })
    }
  )
}

const printStream = () => {
  fetch("http://kure-network.stuorg.iastate.edu:8000/TheBasement")
    .then(response => {
      const reader = response.body.getReader()
      return new ReadableStream({
        start(controller) {
          return pump()
          function pump() {
            return reader.read().then(({ done, value }) => {
              // When no more data needs to be consumed, close the stream
              if (done) {
                controller.close()
                return
              }
              // Enqueue the next data chunk into our target stream
              controller.enqueue(value)
              return pump()
            })
          }
        },
      })
    })
    .then(stream => new Response(stream))
    .then(response => console.log(response.blob()))
    .catch(err => console.error(err))
}

const Player = () => (
  <h1
    onClick={() => {
      audio.play()
      printStream()
      console.log("test")
    }}
  >
    Player
  </h1>
)

export default Player
