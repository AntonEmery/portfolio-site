import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import config from '../config'

import axios from 'axios'
import ReactLoading from 'react-loading'

import ProjectListView from '../views/ProjectListView'
import ProjectDetailView from '../views/ProjectDetailView'

import '../assets/css/App.css'

class App extends Component {

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

  ProjectListViewComponent = (props) => {
    return <ProjectListView
      projects={this.state.projects}
      {...props}
    />
  }

  ProjectDetailView = (props) => {
    return <ProjectDetailView
      projects={this.state.projects}
      {...props}
    />
  }

  renderRouter = () => (
    <Router>
      <div>
        <p>Menu</p>
        <Route exact path="/" component={this.ProjectListViewComponent} />
        <Route path="/project/:slug" component={this.ProjectDetailView} />
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

export default App
