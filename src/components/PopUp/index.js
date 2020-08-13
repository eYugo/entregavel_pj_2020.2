import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function PopUp({ media, notaP3, show, handleClose }) {

    return (
        <Modal className="text-center" show={show} onHide={handleClose} animation={true} centered>
            <Modal.Header>
                <Modal.Title className="text-center mx-auto">Nota P3:</Modal.Title>
            </Modal.Header>
            <Modal.Body><h3>{notaP3}</h3></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                    </Button>
            </Modal.Footer>
        </Modal >

    );
}

export default PopUp;