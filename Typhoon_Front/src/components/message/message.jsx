import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example(props) {
  
 


  return (     
      <Modal
        size="sm"
        show={props.smShow}
        onHide={props.onhide}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Sign up Status
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Compte créer avec succès!!</p>
        </Modal.Body>
      </Modal>

  );
}
export default Example;