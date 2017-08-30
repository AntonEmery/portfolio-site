import React, { Component } from 'react'

import ProjectListItem from './ProjectListItem'
import Header from './Header'

class ProjectList extends Component {
  render() {
    const projectListItem = this.props.projects.map(project => {
      return <ProjectListItem
        title = {project.title}
        slug = {project.slug}
        img = {project.img}
        tagline = {project.tagline}
        key = {project.slug}
      />
    })
    return (
      <div>
        {projectListItem}
      </div>
    )
  }
}

export default ProjectList
