import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import config from '../config'

import axios from 'axios'
import ReactLoading from 'react-loading'

import ProjectList from './components/ProjectList'
import ProjectDetail from './components/ProjectDetail'

import '../assets/css/App.css'

export default class Portfolio extends Component {

  state = {
    loading: true,
    projects: [ ]
  }

  parseProjects = (jsonResponse) => {
    const posts = jsonResponse.data.posts
    const projects = posts.map(post => {
      return {
        title:   post.title,
        slug:    post.slug,
        img:     post.custom_fields.imageurl[0],
        tagline: post.custom_fields.tagline
      }
    })
    this.setState({projects})
  }

  ProjectList = (props) => {
    return <ProjectList
      projects={this.state.projects}
      {...props}
    />
  }

  ProjectDetail = (props) => {
    return <ProjectDetail
      projects={this.state.projects}
      {...props}
    />
  }

  renderRouter = () => (
    <Router>
      <div>
        <p>Menu</p>
        <Route exact path="/" component={this.ProjectList} />
        <Route path="/project/:slug" component={this.ProjectDetail} />
      </div>
    </Router>
  )

  componentDidMount() {
    return axios.get(config.url)
    .then(this.parseProjects)
    .then(this.setState({loading: false}))
  }

  render() {
    const component = () => {
      const isLoading = this.state.loading
      const loader = (<ReactLoading type="bars" color="#444" />)
      return (isLoading) ? loader : (this.renderRouter())
    }

    return (
      <div className="App">
        <article>
          {component()}
        </article>
      </div>
    )
  }
}
