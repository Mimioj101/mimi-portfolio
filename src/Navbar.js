import React from "react"
let startMenu = document.querySelector('#startMenu')
// let start = document.querySelector("#start")

class NavBar extends React.Component {

  state = {
    startDisplay: false
  }

// function startTime() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     // add a zero in front of numbers<10
//     m = checkTime(m);
//     s = checkTime(s);
//     var hd = h;
//     $('#clock').html((hd = 0 ? "12" : hd > 12 ? hd - 12 : hd) + ":" + m + " " + (h < 12 ? "AM" : "PM"));
//     t = setTimeout(function () { startTime() }, 500);
// }

// function checkTime(i) {
//     if (i < 10) {
//         i = "0" + i;
//     }
//     return i;
// }

  toggleMenu = () => {
    console.log(startMenu, "DISPLAY:", startMenu.style.display)
      // startMenu.style.display = 'block'
      this.setState({startDisplay: !this.state.startDisplay})
  }
    
    render() {
      console.log(this.state)
        return(
          <div id="navbar">
            <div id="start" className="startRest" onClick={this.toggleMenu}>Start</div>

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