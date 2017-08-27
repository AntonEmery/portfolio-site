import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



function ProjectOverview (props) {
    return (
      <div>
        <p>{props.title}</p>
        <p>{props.slug}</p>
        <p>{props.img}</p>
        <p>{props.tagline}</p>

        <Link to={`/project/${props.slug}`}>Project Details</Link>
      </div>
    )
}

export default ProjectOverview;
