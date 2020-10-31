import React from "react"
import  {Modal, Button}  from "react-bootstrap"
import ModalDialog from "react-bootstrap/esm/ModalDialog"
// import AuthLP from "../pages/AuthLP"
import {GlobalCtx} from "../App"
import Updateform from "../pages/updateform"

function UpdateModal() {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div className="Modal-page">
        <Button className="Modal-btn" onClick={handleShow}>
          Update
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
                <h1>UPDATE MY MOVIE REVIEW </h1>
                </Modal.Title>
          </Modal.Header>

 
          <Modal.Body>
                <Updateform />
        </Modal.Body>




          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  export default UpdateModal