import React from "react"
import "./Albums.css"
// import { data } from "../Data"
import Album from "../Album/Album"

const Albums = ({ data }) => {
  return (
    <div className="albums_container">
      {data.map((item, i) => (
        <Album {...item} key={item.id} />
      ))}
    </div>
  )
}

export default Albums
