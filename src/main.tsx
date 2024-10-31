import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './container/index'
import './assets/css/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'popper.js/dist/popper.min.js'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
) 