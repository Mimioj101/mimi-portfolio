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
        {/* <NavBar /> */}
        <ContactMe />
        <Resume />
        <Paint />
        <IconsContainer />
      </div>
    );
  }
}

export default App;
