import { BrowserRouter as Router } from "react-router-dom";
import RouteConfig from './routes/RouteConfig'; 
import './App.css';
import Header from './Components/Header/Header';
import Drawer from './Components/Drawer/Drawer';

function App() {
  
 

  return (
    <>
    <Router>
      <div className="app">
        <Header />
        <Drawer />
        <div className="content">
          <p ></p>
          <h1>Projects Management</h1>
          <RouteConfig />
        </div>
        
      </div>
    </Router>
    </>
  )
}



export default App
