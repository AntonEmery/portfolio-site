import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import config from '../config'

import axios from 'axios'

import renderLoading from './components/Loading'
import Menu from './components/Menu'

import ProjectList from './routes/ProjectList'
import ProjectDetail from './routes/ProjectDetail'

import '../assets/css/App.css'

export default class Portfolio extends Component {

  state = {
    loading: true,
    projects: []
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
    this.setState({projects, loading: false})
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

  renderRouter = (menuItems) => (
    <Router>
      <div>
        <Menu menuItems={menuItems} />
        <Route exact path="/" component={this.ProjectList} />
        <Route path="/project/:slug" component={this.ProjectDetail} />
      </div>
    </Router>
  )

  // Lets us test that loading animation is working properly
  delayLoading = (res) => (new Promise((r) => {setTimeout(() => {r(res)}, 2000)}))

  componentDidMount() {
    return axios.get(config.url)
    .then(this.delayLoading)
    .then(this.parseProjects)
  }

  render() {
    const menuItems = ['Home', 'About', 'Contact']
    const component = () => {
      const isLoading = this.state.loading
      return (isLoading) ? renderLoading() : (this.renderRouter(menuItems))
    }

    return (
      <div className="wrapper">
        <div className="App">
          <article>
            {component()}
          </article>
        </div>
      </div>
    )
  }
}
