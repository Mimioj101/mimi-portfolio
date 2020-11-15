import React from "react"
import Popup from 'reactjs-popup';


class NavBar extends React.Component {


  PopupExample = () => (
    <Popup trigger={<button>START</button>} position="top left" >
      {close => (
        <div id="startMenu">
          <button className="menuItem">LinkedIn</button>
          <br/>
          <button className="menuItem">GitHub</button>
          <br/>
          <button className="menuItem">Medium</button>
          <br/>
          <button className="menuItem">Email Me</button>
        </div>
      )}
    </Popup>
  );
    
    render() {
        return(
          <div id="navbar">
            {this.PopupExample()}
            {/* <div id="notifications">
                <div id="clock">CLOCK GOES HERE</div>
            </div> */}
          </div>
        )
    }
}

export default NavBar;