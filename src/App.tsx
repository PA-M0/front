import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import RouteConfig from './routes/RouteConfig'; 
import './App.css'

function App() {
  

  return (
    <>
    <Router>
      <div>
        <h1>Projects Management</h1>
        <RouteConfig />
      </div>
    </Router>
    </>
  )
}

export default App
