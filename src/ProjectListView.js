import React from 'react';
import ProjectOverview from './ProjectOverview'



function ProjectListView (props) {
  console.log(props.projects)

  const renderProjects = (props) => (
    props.projects.map(project => {
      return <ProjectOverview
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

export default ProjectListView
