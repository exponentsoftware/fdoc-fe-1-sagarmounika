import React from "react"
import "./Album.css"

const Album = ({ id, artist, image, title }) => {
  return (
    <div key={id} className="album">
      <img src={image} alt={title} />
      <div className="col">
        <div className="col2">
          <h2> {artist} </h2>
        </div>
      </div>
    </div>
  )
}

export default Album
