import React from 'react'

import ProjectListItem from './ProjectListItem'

export default function ProjectList (props) {

  const renderProjects = (props) => (
    props.projects.map(project => {
      return <ProjectListItem
        title = {project.title}
        slug = {project.slug}
        img = {project.img}
        tagline = {project.tagline}
        key = {project.slug}
      />
    })
  )

  return (
    <div>
      {renderProjects(props)}
    </div>
  )
}
