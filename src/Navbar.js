import React from "react"
// import {Navbar, NavDropdown, Nav} from 'react-bootstrap';

class NavBar extends React.Component {
    
    render() {
        return(
          <div id="navbar">
            <div id="start" className="startRest">Start</div>

            <div id="startMenu">
                <div id="left">
                    <div className="b">
                        Windows
                        <span className="num95">95</span>
                    </div>
                </div>
                
                <div className="menuItem expander">Programs</div>
                <div className="menuItem expander">Documents</div>
                <div className="menuItem expander">Settings</div>
                <div className="menuItem">Find</div>
                <div className="menuItem">Help</div>
                <div className="menuItem">Run</div>
                <div className="divider"></div>
                <div className="menuItem" id="shutdown">Sh<span>u</span>t Down</div>
            </div>

            <div id="notifications">
                <div id="clock">CLOCK GOES HERE</div>
            </div>
          </div>
        )
    }
}

export default NavBar;