import React from 'react'
import { Link } from 'react-router-dom'

export default function ProjectListItem (props) {
  const detailLinkTo = `/project/${props.slug}`
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.slug}</p>
      <p>{props.img}</p>
      <p>{props.tagline}</p>

      <Link to={detailLinkTo}>Project Details</Link>
    </div>
  )
}
