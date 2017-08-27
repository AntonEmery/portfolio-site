import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'

import ProjectDetail from '../../routes/ProjectDetail'
import projectDetailTemplate from '../../templates/ProjectDetail'

// Globals used in tests
const globalDatabase = { props: {} }

// Method to help creating some stubbed projects
const createProjects = () => {
  return [
    {
      title:   'Test1',
      slug:    'test1',
      img:     'http://placekitten.com/g/200/300',
      tagline: 'tagline1'
    },
    {
      title:   'Test2',
      slug:    'test2',
      img:     'http://placekitten.com/g/200/300',
      tagline: 'tagline2'
    }
  ]
}

// Execute some setup before each test
beforeEach(() => {
  // Stub props
  globalDatabase.props = {
    projects: createProjects(),
    match: { params: { slug: '' } }
  }
})

it('Renders a projectDetail', () => {
  // Index of project we want to test
  const pIndex = 1

  // Get props from global
  const props = globalDatabase.props

  // Create a detail view template from the project with our pIndex
  const wantedResult = projectDetailTemplate(props.projects[pIndex])

  // Set slug param for project with our pIndex
  props.match.params.slug = props.projects[pIndex].slug

  // Create a new ShallowRenderer
  const shallow = new ShallowRenderer()

  // Render a ProjectDetail with the stubbed props
  shallow.render(<ProjectDetail {...props} />)

  // Save the rendered result
  const actualResult = shallow.getRenderOutput()

  // Make sure that the component rendered exactly what we wanted
  expect(actualResult).toEqual(wantedResult)
})
