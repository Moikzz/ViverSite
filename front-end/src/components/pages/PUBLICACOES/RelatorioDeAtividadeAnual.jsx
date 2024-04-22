import "../Post.css";

import { useState } from "react";

import { RelatorioDeAtividadeAnualData } from "../../../data/Documents/RelatorioDeAtividadeAnual";
import { getRelatorioDeAtividadeAnual } from "../../../utils/Doc-Util";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const RelatorioDeAtividadeAnual = () => {
  const Doc = RelatorioDeAtividadeAnualData().sort((a, b) => b.id - a.id);

  const [show, setShow] = useState(undefined);
  const handleClose = () => setShow(undefined);
  const handleShow = (id) => setShow(id);

  return (
    <div className="post-main">
      <h1 className="post-title">Relatório de Atividade Anual</h1>
      <p className="post-text">
        Ao clicar em qualquer um dos RAAs, um PDF irá se abrir mostrando o que a
        Viver fez de atividades no ano desejado
      </p>

      {Doc.map((item) => {
        return (
          <Button key={item.id} variant="custom" className="custom-modal" onClick={() => handleShow(item.id)}>
            {item.id}
            <div onClick={(e) => e.stopPropagation()}>
              <Modal show={show === item.id} onHide={handleClose} size="xl">
                <Modal.Header>
                  <Modal.Title>{item.title || `Relatório do ano de ${item.id}`}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <iframe className="modal-pdf" src={getRelatorioDeAtividadeAnual(item.pdf)} title={item.id}/>
                </Modal.Body>
                <Modal.Footer>
                  <Link to={`/pdf/${item.id}`}>
                    <Button variant="custom" className="custom-button"> Download </Button>
                  </Link>
                  <Button onClick={() => setShow(!show)} variant="custom" className="custom-button-alt"> Fechar </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Button>
        );
      })}
    </div>
  );
};

export default RelatorioDeAtividadeAnual;
