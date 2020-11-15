import React from "react"
import Popup from 'reactjs-popup';


class NavBar extends React.Component {


  PopupExample = () => (
    <Popup trigger={<button>START</button>} position="top left">
      {close => (
        <div>
          <button>LinkedIn</button>
          <br/>
          <button>GitHub</button>
          <br/>
          <button>Medium</button>
          <br/>
          <button>Email Me</button>
        </div>
      )}
    </Popup>
  );
    
    render() {
      console.log(this.state)
        return(
          <div id="navbar">
            {this.PopupExample()}

            {/* <div id="startMenu">
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
            </div> */}

            {/* <div id="notifications">
                <div id="clock">CLOCK GOES HERE</div>
            </div> */}
          </div>
        )
    }
}

export default NavBar;