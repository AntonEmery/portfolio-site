import React, { Component } from 'react'
import ReactLoading from 'react-loading'
import ProjectOverview from './ProjectOverview'
import axios from 'axios'
import api from './api.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { loading: true }
  }

  componentDidMount() {
    return axios.get(api.key)
    .then(res => console.log(res))
    .then(this.setState({loading: false}))
  };

  render() {
    const component = () => {
        const isLoading = this.state.loading
        const loader = (<ReactLoading type="bars" color="#444" />)
        return (isLoading) ? loader : (<ProjectOverview />)
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
