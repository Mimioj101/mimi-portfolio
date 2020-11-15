import React from "react"

class AboutMe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            diffX: 0,
            diffY: 0,
            dragging: false,
            styles: {}
        }

        this._dragStart = this._dragStart.bind(this);
        this._dragging = this._dragging.bind(this);
        this._dragEnd = this._dragEnd.bind(this);
    }

    _dragStart(e) {
        this.setState({
            diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
            diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
            dragging: true
        });
    }

    _dragging(e) {

        if(this.state.dragging) {
            var left = e.screenX - this.state.diffX;
            var top = e.screenY - this.state.diffY;
    
            this.setState({
                styles: {
                    left: left,
                    top: top
                }
            });
        }
    }    

    _dragEnd() {
        this.setState({
            dragging: false
        });
    }
    
    render() {
        return(
            <div className="window" id="about-me-window" style={this.state.styles} onMouseDown={this._dragStart} onMouseMove={this._dragging} onMouseUp={this._dragEnd} >
                <div className="title-bar">
                    <div className="title-bar-text"><img src="files.png" alt="About Me" width="12px"/> About</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">
                    <p>
                    Hi, My name is Mimi!
                    <br/>
                    <br/>
                    I have a background in tech sales and I code in Javascript, React, Ruby, and Ruby on Rails to name a few.
                    <br/>
                    <br/>
                    When I am not coding, I love brewing my own kombucha and experimenting with fermenting all sorts of things. I once ran a marathon and came in dead last!
                    </p>
                </div>
            </div>
        )
    }
}

export default AboutMe;