import React from 'react'
import PropTypes from 'prop-types'

import {error, notFound, loading} from '../errors'

// Determine if route slug was set or not
function slugProvided (props) {
  // Get route params object
  const params = props.match.params

  // If `:slug` is in params then return it, otherwise return null
  const slug = (params.hasOwnProperty('slug')) ? params.slug : null

  // If slug is null then something went really wrong
  if (slug === null) { return false } else { return slug }
}

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
  } else { return notFound(slug) }
}

// Handles the showing of the ProjectDetail
function ProjectDetail (props) {
  // If route params `:slug` not provided then show error
  if (!slugProvided(props)) { return error() }

  // Get slug from route params
  const slug = slugProvided(props)

  // Get projects from parent component using props
  const projects = props.projects

  // If projects is an empty array show loading
  if (projects.length === 0) { return loading() }

  // If we get here then attempt to render the right project
  return renderProject(projects, slug)
}

// Ensure specific variables and types are passed to component
ProjectDetail.propTypes = { projects: PropTypes.array }

// Export component
export default ProjectDetail
