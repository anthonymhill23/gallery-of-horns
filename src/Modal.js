import React from "react";
import Modal from 'react-bootstrap/Modal'



class SelectedBeast extends React.Component {
  render() {
    return (
      <>
        <Modal
          show={this.props.showModal}
          onClick={this.props.hideModal}
        >
          <Modal.Header closeButton>{this.props.title}</Modal.Header>
          <Modal.Body
            onClick={this.props.hideModal}
            containerClassName="modal"
          >
            <img class="modalImage" src={this.props.imgURL} alt={this.props.keyword} />
            <p>{this.props.description}</p>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}
export default SelectedBeast;