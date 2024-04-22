import "../Post.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PDT from '../../../assets/documents/Transparencia/Plano-de-Trabalho/Plano-de-Trabalho.pdf'

const PlanoDeTrabalho = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="post-main">
      <h1 className="post-title">Plano de Trabalho</h1>
      <p className="post-text-alt">
        Ao clicar no botão abaixo, um PDF irá se abrir mostrando o Plano de
        Trabalho da Viver
      </p>
      <Button variant="custom" className="custom-modal-alt" onClick={handleShow}>
        Plano de Trabalho
      </Button>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header>
          <Modal.Title>Plano de Trabalho</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe className="modal-pdf" src={PDT} title="Plano de Trabalho" />
        </Modal.Body>
        <Modal.Footer>
          <Link to={PDT}>
            <Button variant="custom" className="custom-button"> Download </Button>
          </Link>
          <Button onClick={() => setShow(!show)} variant="custom" className="custom-button-alt"> Fechar </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PlanoDeTrabalho;
