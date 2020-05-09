import React from 'react'
import './styles.scss'

const App = () => (
  <div className="app">
    <h2>React Minimal Template</h2>
    <img src={require('../assets/logo.png')} alt="react boiler" />
    <a
      href="https://github.com/nadavzilber/react-minimal-template"
      rel="noreferrer noopener"
      target="_blank"
    >
      know more
    </a>
    <footer>developed and maintained by nadavzilber</footer>
  </div>
)

export default App
