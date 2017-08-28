import React from 'react'
import ReactDOM from 'react-dom'

// Import main css
import './assets/css/index.css'

// Register service worker to implement client cache
import registerServiceWorker from './lib/services/registerServiceWorker'

// Display portfolio
import Portfolio from './lib/Portfolio'
ReactDOM.render(<Portfolio />, document.getElementById('root'))

// Start service worker
registerServiceWorker()
