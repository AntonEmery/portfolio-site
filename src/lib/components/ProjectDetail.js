import renderNotFound from '../routes/NotFound'
import projectDetailTemplate from '../templates/ProjectDetail'

// Try to render project if we have some projects and a slug
export default (projects, slug) => {
  // Create filter fn using route `:slug` to match specific project
  let findProject = project => project.slug === slug

  // Iterate over projects and find the project that matches our route `:slug`
  let project = projects.find(findProject)

  // If project found then show title
  if (project) {
    return projectDetailTemplate(project)
  // If we could not find the project then show `not found`
  } else { return renderNotFound(slug) }
}
