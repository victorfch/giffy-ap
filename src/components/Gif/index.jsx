import React from 'react'
import { Link } from 'wouter'
import './Gif.css'

export default function Gif(props) {
		return (
			<Link to={`/gif/${props.id}`} className="gif">
				<h4>{props.title}</h4>
				<img loading='lazy' src={props.url} alt={props.title} />
			</Link>
		)
}