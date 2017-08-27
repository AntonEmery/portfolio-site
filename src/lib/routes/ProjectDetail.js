// Ensure props are valid using prop-types
import PropTypes from 'prop-types'

// Helper to find a project by a slug name
import renderProjectDetail from '../components/ProjectDetail'

// Helper to determine if a slug was provided on route params
import slugProvided from '../helpers/slugProvided'

// Use the shared error handler
import renderError from './Error'

// Use the shared loading handler
import renderLoading from '../components/Loading'

// Handles the showing of the ProjectDetail
function ProjectDetail (props) {
  // If route params `:slug` not provided then show error
  if (!slugProvided(props)) { return renderError() }

  // Get slug from route params
  const slug = slugProvided(props)

  // Get projects from parent component using props
  const projects = props.projects

  // If projects is an empty array show loading
  if (projects.length === 0) { return renderLoading() }

  // If we get here then attempt to render the right project
  return renderProjectDetail(projects, slug)
}

// Ensure specific variables and types are passed to component
ProjectDetail.propTypes = { projects: PropTypes.array }

// Export component
export default ProjectDetail
