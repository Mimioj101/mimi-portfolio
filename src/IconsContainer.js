import Modal from 'react-modal';
import React from "react"
import GWizModal from './GWizModal.js'



class IconsContainer extends React.Component {

  state = {
    showModal: false
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div id="icons-container">
          <img src="computer.png" alt="Desktop Icon" onClick={this.handleOpenModal}/>
          <Modal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >Hello</Modal>
          <br/>
          <br/>
          <br/>
          <img src="files.png" alt="Desktop Icon"/>
          <br/>
          <br/>
          <br/>
          <img src="harddrive.png" alt="Desktop Icon"/>
          <img src="internet.png" alt="Desktop Icon"/>
          <img src="solitaire.png" alt="Desktop Icon"/>
          <img src="trashcan.png" alt="Desktop Icon"/>
          <img src="email.png" alt="Desktop Icon"/>
          <img src="help.png" alt="Desktop Icon"/>
          <img src="information.png" alt="Desktop Icon" />
          <img src="network.png" alt="Desktop Icon"/>
          <img src="paint.png" alt="Desktop Icon" />
          <img src="search.png" alt="Desktop Icon" />
    </div>
    )
  }
}

export default IconsContainer;