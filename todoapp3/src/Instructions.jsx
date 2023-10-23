// Instructions.js
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Instructions() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const showInstructions = () => {
    setShowModal(true);
  };

  return (
    <div className="container" style={{marginBottom: '20px'}}>
      <div className="row">
        <div className="col-md-12">
          <Button
            className="btn btn-success"
            variant="primary"
            onClick={showInstructions}
            style={{ margin: "auto", padding: '7px 40px' }}
          >
            Instructions
          </Button>
        </div>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Instructions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Click on any Pending task to move it into the Completed section.
            Likewise, click on a Completed task to move it back into the Pending
            section.
          </p>
          <p>
            To add a task, simply click the “Add Task” button, and you’ll see a
            modal to fill out the new task information. The task will
            automatically go into the pending section.
          </p>
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

export default Instructions;
