import React from "react"
import './App.css';
import ContactMe from './ContactMe.js'
import Resume from './Resume.js'
import NavBar from './Navbar.js'
import IconsContainer from './IconsContainer.js'
import Paint from './Paint.js'
import AboutMe from './AboutMe.js'

class App extends React.Component {

  renderPaintModal = () => {
    console.log("hello mimi")
    return <Paint />
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        <ContactMe />
        <Resume />
        <AboutMe />
        {this.renderPaintModal()}
        <IconsContainer renderPaintModal={this.renderPaintModal} />
      </div>
    );
  }
}

export default App;
