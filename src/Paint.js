import React from "react"

class Paint extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            diffX: 0,
            diffY: 0,
            dragging: false,
            styles: {},
            showModal: true
        }

        this._dragStart = this._dragStart.bind(this);
        this._dragging = this._dragging.bind(this);
        this._dragEnd = this._dragEnd.bind(this);
    }

    _dragStart(e) {
        // add 1 to z-index
        // console.log("Z INDEX", e.target.parentNode.style)
        // e.target.parentNode.style.zIndex++ 
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

    closeModal = (e) => {
        this.setState({showModal: false})
    }

    renderModal = () => {
        if (this.state.showModal === true) {
            return(
                <div className="window" id="paint-window" style={this.state.styles} onMouseDown={this._dragStart} onMouseMove={this._dragging} onMouseUp={this._dragEnd}>
                    <div className="title-bar">
                        <div className="title-bar-text"><img src="paint.png" alt="Paint" width="12px"/> Paint</div>
                        <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close" onClick={this.closeModal}></button>
                        </div>
                    </div>
                    <div className="window-body">
                        <iframe src="https://jspaint.app" title="Paint Window" height="400" width="650"></iframe>
                    </div>
                </div>
            )
        }
    }

  render() {
      console.log(this.state)
    return (
        <div>
            {this.renderModal()}
        </div>
    );
  }
}

export default Paint;