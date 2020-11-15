import React from "react"

class GWizModal extends React.Component {
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
                    top: top,
                    zIndex: 0
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
    return (
        <div className="window" id="g-wiz-window" style={this.state.styles} onMouseDown={this._dragStart} onMouseMove={this._dragging} onMouseUp={this._dragEnd}>
        <div className="title-bar">
            <div className="title-bar-text"><img src="help.png" alt="Help" width="12px"/> G.Wiz</div>
            <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
            </div>
        </div>
        <div className="window-body">
            <p>G.Wiz Demo and Github Repos</p>
        </div>
    </div>
    );
  }
}

export default GWizModal;