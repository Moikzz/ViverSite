import "../Post.css";

import { useState } from "react";

import { GetDocumentDataSmall } from "../../../data/DocumentDataSmall";
import { GetPDF } from "../../../utils/Doc-Util";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Parcerias = () => {
  const Doc = GetDocumentDataSmall().sort((a, b) => b.year - a.year);

  const [show, setShow] = useState(undefined);
  const handleClose = () => setShow(undefined);
  const handleShow = (id) => setShow(id);

  return (
    <div className="post-main">
      <h1 className="post-title">Parcerias</h1>
      <p className="post-text-last">
        Abaixo estão os nossos parceiros, que ajudam a Viver a manter a sua
        missão social. Para acessar quaisquer deles, basta clicar no botão
        desejado abaixo e um modal abrirá exibindo dados do parceiro.
      </p>

      {Doc.map((item) => {
        return (
          <Button key={item.id} variant="custom" className="custom-modal" onClick={() => handleShow(item.id)}>
            {item.name}
            <div onClick={(e) => e.stopPropagation()}>
              <Modal show={show === item.id} onHide={handleClose} size="xl">
                <Modal.Header>
                  <Modal.Title> {item.name} </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <iframe className="modal-pdf" src={GetPDF(item.pdf)} title={item.name}/>
                </Modal.Body>
                <Modal.Footer>
                  <Link to={`/pdf/${item.id}`}>
                    <Button variant="custom" className="custom-button">Download</Button>
                  </Link>
                  <Button onClick={() => setShow(!show)} variant="custom" className="custom-button-alt">Fechar</Button>
                </Modal.Footer> 
              </Modal>
            </div>
          </Button>
        );
      })}
    </div>
  );
};

export default Parcerias;
