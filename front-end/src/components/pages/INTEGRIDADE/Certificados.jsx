import "../Post.css";
import { useState } from "react";

import { CertificadosData } from "../../../data/Documents/Certificados";
import { getCertificados } from "../../../utils/Doc-Util";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Certificados = () => {

  const Doc = CertificadosData().sort((a, b) => b.year - a.year);

  const [show, setShow] = useState(undefined);
  const handleClose = () => setShow(undefined);
  const handleShow = (id) => setShow(id);


  return (
    <div className="post-main">
      <h1 className="post-title">Certificados</h1>
      <p className="post-text-last">
        Logo abaixo estão os certificados que a Viver possui, reafirmando o seu
        compromisso com a sua causa social. Para visualizar os certificados,
        basta clicar no botão que um PDF abrirá mostrando o certificado desejado
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
                  <iframe className="modal-pdf" src={getCertificados(item.pdf)} title={item.name}/>
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

export default Certificados;
