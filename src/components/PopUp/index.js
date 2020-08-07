import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function PopUp({ media, notaP3, show, handleClose }) {

    return (
        <Modal className="text-center" show={show} onHide={handleClose} animation={true} centered>
            <Modal.Header closeButton>
                <Modal.Title className="text-center">Resultado:</Modal.Title>
            </Modal.Header>
            <Modal.Body>Para você ficar com média {media} nesta matéria você deve tirar <h3>{notaP3}</h3> na P3.</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Fechar
                    </Button>
            </Modal.Footer>
        </Modal>

    );
}

export default PopUp;