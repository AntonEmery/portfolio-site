// Ensure props are valid using prop-types
import PropTypes from 'prop-types'

// Get loading handler
import Loading from '../components/Loading'

// Get the rendered project list
import renderProjectListWrapper from '../components/ProjectListWrapper'

// Handles the showing of the ProjectList
function ProjectList (props) {
  if (props.projects.length > 0) {
    // Attempt to render the list of projects
    return renderProjectListWrapper(props)
  } else {
    return Loading()
  }
}

// Ensure specific variables and types are passed to component
ProjectList.propTypes = { projects: PropTypes.array }

// Export component
export default ProjectList
