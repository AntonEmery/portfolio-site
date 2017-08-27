// Determine if route slug was set or not
export default (props) => {
  // Get route params object
  const params = props.match.params

  // If `:slug` is in params then return it, otherwise return null
  const slug = (params.hasOwnProperty('slug')) ? params.slug : null

  // If slug is null then return false to indicate we could not find it
  if (slug === null) { return false } else { return slug }
}
