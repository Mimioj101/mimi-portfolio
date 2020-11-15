import React from "react"
import Popup from 'reactjs-popup';
import Clock from 'react-digital-clock';


class NavBar extends React.Component {


  PopupExample = () => (
    <Popup trigger={<button>START</button>} position="top left" >
      {close => (
        <div id="startMenu">
          <a href="https://www.linkedin.com/in/mimio/" target="_blank" rel="noreferrer noopener"><button className="menuItem">LinkedIn</button></a>
          <br/>
          <a href="https://github.com/Mimioj101" target="_blank" rel="noreferrer noopener"><button className="menuItem">GitHub</button></a>
          <br/>
          <a href="https://medium.com/@mimioj" target="_blank" rel="noreferrer noopener"><button className="menuItem">Medium</button></a>
          <br/>
          <a href="mailto: mimioj@gmail.com"><button className="menuItem">Email</button></a>
        </div>
      )}
    </Popup>
  );

    
  render() {
      return(
        <div id="navbar">
            {this.PopupExample()}
            <Clock id="clock" />
        </div>
      )
  }
}

export default NavBar;