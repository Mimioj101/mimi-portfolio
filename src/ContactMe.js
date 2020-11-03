import React from "react"

// let width = window.innerWidth;
// let height = window.innerHeight;

class ContactMe extends React.Component {
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
            <div className="window" id="contact-me-window" style={this.state.styles} onMouseDown={this._dragStart} onMouseMove={this._dragging} onMouseUp={this._dragEnd} >
                <div className="title-bar">
                    <div className="title-bar-text">Contact Mimi</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close"></button>
                    </div>
                </div>
                <div className="window-body">
                    <p>Email: <a href="mailto: mimioj@gmail.com">mimioj@gmail.com</a></p>
                    <p>Phone: 609-457-7718</p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/mimio/" target="_blank" rel="noreferrer noopener">linkedin.com/in/mimio</a></p>
                    <p>Github: <a href="https://github.com/Mimioj101" target="_blank" rel="noreferrer noopener">github.com/Mimioj101</a></p>
                </div>
            </div>
        )
    }
}

export default ContactMe;