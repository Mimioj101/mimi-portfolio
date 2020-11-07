import React from "react"
import './App.css';
import ContactMe from './ContactMe.js'
import Resume from './Resume.js'
import NavBar from './Navbar.js'




class App extends React.Component {

  render() {
    return (
      <div className="container">
        {/* <h1 id="mimi-ojserkis" data-text="Mimi Ojserkis">Mimi Ojserkis</h1> */}
        <NavBar />
        <ContactMe />
        <Resume />
      </div>
    );
  }
}

export default App;
