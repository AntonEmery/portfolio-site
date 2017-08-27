import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import App from './App'
import ProjectDetailView from './ProjectDetailView'

const Routes = () => (
  <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/project/:id" component={ProjectDetailView} />
      </div>
  </Router>
)

export default Routes;
