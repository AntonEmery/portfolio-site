import React from 'react'

// Render a project not found if couldn't match by slug name
function renderNotFound (slug) { return (<p>Project not found: {slug}</p>) }

// Render an error if something weird happens
function renderError () { return (<p>Error</p>) }

// Render a loading screen when no projects avaliable
function renderLoading () { return (<p>Loading</p>) }

// Try to render project if we have some projects and a slug
function renderProject (projects, slug) {
  // Create filter fn using route `:slug` to match specific project
  let findProject = project => project.slug === slug

  // Iterate over projects and find the project that matches our route `:slug`
  let project = projects.find(findProject)

  // If project found then show title
  if (project) {
    return (
      <div>
        <p>{project.title}</p>
      </div>
    )
  // If we could not find the project then show `not found`
  } else { return renderNotFound(slug) }
}

// Handles the showing of the ProjectDetail
export default function ProjectDetail (props) {
  // Get projects from parent component using props
  const projects = props.projects || []

  // Get the `:slug` from the route
  const slug = props.match.params.slug || null

  // If projects is an empty array show loading and fail fast using return
  if (projects.length === 0) { return renderLoading() }

  // If slug is null then something went really wrong
  if (slug === null) { return renderError() }

  // If we get here then attempt to render the right project
  return renderProject(projects, slug)
}
