import "../Post.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ES from '../../../assets/documents/Transparencia/Estatuto-Social/Estatuto-Atual.pdf'

const EstatutoSocial = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="post-main">
      <h1 className="post-title">Estatuto Social</h1>
      <p className="post-text-alt">
        Ao clicar no botão abaixo, um PDF irá se abrir mostrando o Estatuto
        Social da Viver
      </p>
      <Button variant="custom" className="custom-modal-alt" onClick={handleShow}>
        Estatuto Social
        <div onClick={(e) => e.stopPropagation()}>
          <Modal show={show} onHide={handleClose} size="xl">
            <Modal.Header>
              <Modal.Title>Estatuto Social</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <iframe className="modal-pdf" src={ES} title="Estatuto Social"/>
            </Modal.Body>
            <Modal.Footer>
              <Link to={ES}>
                <Button variant="custom" className="custom-button"> Download </Button>
              </Link>
              <Button onClick={() => setShow(!show)} variant="custom" className="custom-button-alt"> Fechar </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Button>
    </div>
  );
};

export default EstatutoSocial;
