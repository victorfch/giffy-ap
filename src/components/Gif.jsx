import React from 'react'

export default function Gif(props) {
    return (
      <div>
        <h4>{props.title}</h4>
        <img src={props.url} alt={props.title} />
      </div>
    )
}