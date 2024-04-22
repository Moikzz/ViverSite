import "../Post.css";

import { PainelDeTransparenciaData } from "../../../data/Documents/PainelDeTransparência";
import { GetPainelDeTransparencia } from "../../../utils/Doc-Util";
import { useState } from "react";
import { Link } from "react-router-dom";

import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const PainelDeTransparencia = () => {
  const Doc = PainelDeTransparenciaData().sort((a, b) => b.id - a.id);

  const [show, setShow] = useState(undefined);
  const handleClose = () => setShow(undefined);
  const handleShow = (id) => setShow(id);

  return (
    <div className="post-main">
      <h1 className="post-title">Painel de Transparência</h1>
      <p className="post-text">
        Este painel contém informações financeiras de cada mês dos últimos anos
        da Viver. Ao clicar em qualquer uma das opções de ano abaixo, um submenu
        abrirá com os meses disponíveis para a consulta. Para acessar o PDF do
        mês desejado, basta clicar no botão do mesmo.
      </p>
      <Accordion flush>
        {Doc.map((item) => {
          return (
              <Accordion.Item eventKey={item.id} key={item.id}>
                <Accordion.Header>Ano de {item.id}</Accordion.Header>
                <Accordion.Body className="accordion-month">
                  {item.months?.map((month) => {
                    return (
                        <Button key={month.id} variant="custom" className="custom-modal-alt" onClick={()=> handleShow(month.id)}>
                          {month.name}
                          <div onClick={e => e.stopPropagation()}>
                            <Modal show={show === month.id} onHide={handleClose} size="xl">
                              <Modal.Header>
                                <Modal.Title> Painel de Transparência de {month.name} de {month.year} </Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                              <iframe className="modal-pdf" src={GetPainelDeTransparencia(month.pdf)} title={month.pdf}/>
                              </Modal.Body>
                              <Modal.Footer>
                                <Link to={`/pdt/${month.id}`}>
                                  <Button variant="custom" className="custom-button"> Download </Button>
                                </Link>
                                <Button onClick={() => setShow(!show)} variant="custom" className="custom-button-alt"> Fechar </Button>
                              </Modal.Footer>
                            </Modal>
                          </div>
                        </Button>
                    );
                  })}
                </Accordion.Body>
              </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default PainelDeTransparencia;
