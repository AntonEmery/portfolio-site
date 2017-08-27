import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactLoading from 'react-loading'
import ProjectOverview from './ProjectOverview'
import axios from 'axios'
import api from './api.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      projects: [ ]
    }
  }

  parseProjects = (jsonResponse) => {
    const posts = jsonResponse.data.posts;
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

  renderProjects = () => (
    this.state.projects.map(project => {
      return <ProjectOverview
        title = {project.title}
        slug = {project.slug}
        img = {project.img}
        tagline = {project.tagline}
        key = {project.slug}
      />
    })
  )

  componentDidMount() {
    return axios.get(api.key)
    .then(this.parseProjects)
    .then(this.setState({loading: false}))
  };

  render() {
    const component = () => {
      const isLoading = this.state.loading
      const loader = (<ReactLoading type="bars" color="#444" />)
      return (isLoading) ? loader : (this.renderProjects())
    }

    return (
      <div className="App">
        <article>
          {component()}
        </article>
      </div>
    );
  }
}

export default App;
