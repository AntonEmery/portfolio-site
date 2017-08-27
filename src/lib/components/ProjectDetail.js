import React from 'react'
import PropTypes from 'prop-types'

// Helper to find a project by a slug name
import renderProjectBySlug from './util/helpers/projectBySlug'

// Helper to determine if a slug was provided on route params
import slugProvided from './util/helpers/slugProvided'

// Use the shared error handlers
import {error, loading} from './util/errors'

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
  return renderProjectBySlug(projects, slug)
}

// Ensure specific variables and types are passed to component
ProjectDetail.propTypes = { projects: PropTypes.array }

// Export component
export default ProjectDetail
