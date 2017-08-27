import React from 'react'
import ReactDOM from 'react-dom'

// Import main css
import './assets/css/index.css'

// Register service worker to implement client cache
import registerServiceWorker from './lib/services/registerServiceWorker'

// Display main app
import App from './lib/App'
ReactDOM.render(<App />, document.getElementById('root'))

// Start service worker
registerServiceWorker()
