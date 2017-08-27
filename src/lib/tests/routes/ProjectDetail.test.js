import * as React from 'react'
import * as enzyme from 'enzyme'

import ProjectDetail from '../../routes/ProjectDetail'

it('renders the correct text when no enthusiasm level is given', () => {
  const project1 = {
    title: 'Test1',
    slug: 'test1',
    img: 'http://placekitten.com/g/200/300',
    tagline: 'tagline1'
  }

  const project2 = {
    title: 'Test2',
    slug: 'test2',
    img: 'http://placekitten.com/g/200/300',
    tagline: 'tagline2'
  }

  const projects = [ project1, project2 ]

  const props = {
    projects,
    match: { params: { slug: 'test1' } }
  }

  const projectDetail = enzyme.shallow(
    <ProjectDetail {...props} />
  )

  expect(projectDetail.debug()).toEqual(
`<div>
  <p>
    Test1
  </p>
</div>`
  )
})
