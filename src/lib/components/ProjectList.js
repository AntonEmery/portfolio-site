import React from 'react'

import ProjectListItem from './ProjectListItem'

export default (props) => (
  <div>
    {props.projects.map(project => {
      return (
        <ProjectListItem
          title = {project.title}
          slug = {project.slug}
          img = {project.img}
          tagline = {project.tagline}
          key = {project.slug}
        />
      )
    })}
  </div>
)
