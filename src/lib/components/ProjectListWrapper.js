import React from 'react'

import Header from './Header'
import ProjectList from './ProjectList'

export default (props) => {
  return (
  <div>
    <Header />
    <ProjectList projects={props.projects}/>
  </div>
)
}
