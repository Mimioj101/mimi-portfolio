import React from "react"
import './App.css';
import ContactMe from './ContactMe.js'
import Resume from './Resume.js'
import NavBar from './Navbar.js'
import IconsContainer from './IconsContainer.js'
import Paint from './Paint.js'

class App extends React.Component {

  render() {
    return (
      <div className="container">
        {/* <h1 id="mimi-ojserkis" data-text="Mimi Ojserkis">Mimi Ojserkis</h1> */}
        {/* <NavBar /> */}
        <ContactMe />
        <Resume />
        <Paint />
        {/* <iframe src="https://jspaint.app" ></iframe> */}
        <IconsContainer />
      </div>
    );
  }
}

export default App;
