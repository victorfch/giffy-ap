import React from 'react'
import './Gif.css'

export default function Gif(props) {
    return (
      <a href={`#${props.id}`} className="gif">
        <h4>{props.title}</h4>
        <img src={props.url} alt={props.title} />
      </a>
    )
}