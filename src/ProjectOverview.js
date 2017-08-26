import React from 'react';


function ProjectOverview (props) {
    return (
      <div>
        <p>{props.title}</p>
        <p>{props.slug}</p>
        <p>{props.img}</p>
        <p>{props.tagline}</p>
      </div>
    )
}

export default ProjectOverview;
