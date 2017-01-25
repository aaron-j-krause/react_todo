import React from 'react'
import ReactDOM from 'react-dom'

import MainView from './components/main'

import './style.css'

const reactNode = document.createElement('div')
document.body.insertBefore(reactNode, document.body.firstChild)

const FirstComponent = () => (
  <MainView />
)

ReactDOM.render(<FirstComponent />, reactNode)
