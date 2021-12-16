import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'
import { FirebaseProvider } from './hooks/firebase'

ReactDOM.render(
  <FirebaseProvider>
      <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </FirebaseProvider>,
  document.getElementById('root')
)
