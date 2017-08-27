import React from 'react';


function ProjectDetailView (props) {
  console.log(props)
  // look at props.projects filter by project.slug === props.match.parms <--
  // this gives you just the details for your individual project


  let project = props.projects.filter(singleProject => {
    return singleProject.slug === props.match.params.slug
  })

  /*Initially I tried to do this
  Did not work because it was trying to return the title before the data from the api call was available? line 22 was logging twice, once as empty, then again with the data
  return (
    <div>
      <p>{project[0].title}</p>
    </div>
  )
  */
  
  console.log(project)
  if(project.length > 0) {
    return (
      <div>
        <p>{project[0].title}</p>
      </div>
    )
  } else {
    return (
      <p>Loading</p>
    )
  }
}

export default ProjectDetailView
