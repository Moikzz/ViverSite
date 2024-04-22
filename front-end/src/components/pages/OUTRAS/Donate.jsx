import "../Post.css";

import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import QRCode from "../../../assets/images/donate/QR.jpg";

const Donate = () => {

  const [copied,setCopied] = useState('Copiar Chave Pix')
  

  const ChavePix = '61996509414'
  
  const CopiarTexto = async () => {
    try {
      await navigator.clipboard.writeText(ChavePix)
      setCopied('Chave copiada!')
      setTimeout(() => {
        setCopied('Copiar chave PIX')
      }, 3000)
    } catch (e) {
      console.log('e', e);
    }
  }

  return (
    <div className="post-main">
      <h1 className="post-title">Faça a sua doação aqui!</h1>
      <p className="post-text">
        A sua contribuição permite que possamos continuar a trabalhar em prol de
        nossas crianças, oferecendo todo o acolhimento e recursos necessários
        para elas crescem na vida.
      </p>
      <p className="donation-title">Escolha um tipo de doação:</p>
      <div className="donations-options">
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Pagamento Único com o Pix</Accordion.Header>
            <Accordion.Body className="donation-body">
              <div className="donation-option">
                <p>
                  Você pode fazer uma doação única escaneando o código QR ou
                  copiando a chave Pix. É muito simples
                </p>
                <p className="post-title">Código QR:</p>
                <img className="donate-image" src={QRCode} alt="" />
                <div className="PixCopy">
                <div className="pix-number">
                  <p><span className="post-title">Chave: </span>{ChavePix}</p>
                </div>
                <div className="pix-copy-button">
                  <Button className="btn-1" variant="custom" onClick={CopiarTexto}>{copied}</Button>
                </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Pagamento recorrente com o Pix</Accordion.Header>
            <Accordion.Body>
              <div className="donation-option">
                <p>
                  Para poder doar de forma recorrente, você precisa se
                  cadastrar. Assim poderemos lembrar para você da periodicidade
                  das doações e mandar a Chave Pix para você efetuar-la
                </p>
                <Form>
                  <Form.Group
                    className="mb-3 form-item"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Nome: </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite seu nome completo"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 form-item"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Digite seu E-mail"
                    />
                    <Form.Text className="text-muted">
                      Não compartilharemos seu e-mail com terceiros.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group
                    className="mb-3 form-item"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Telefone: </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Digite seu telefone"
                    />
                  </Form.Group>
                  <Button className="btn-1" variant="custom" type="submit">
                    Quero doar de forma recorrente!
                  </Button>
                </Form>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Pagamento recorrente com o Paypal/Cartão
            </Accordion.Header>
            <Accordion.Body>
              <div className="donation-option-alt">
                <p>
                  Para doar com o Paypal/Cartão, basta você clicar no botão
                  abaixo e o Paypal assumirá todo o checkout para prosseguir com
                  a doação!
                </p>
                <form
                  action="https://www.paypal.com/donate"
                  method="post"
                  target="_top"
                >
                  <input
                    type="hidden"
                    name="hosted_button_id"
                    value="JKFJCYJQKSB8N"
                  />
                  <input
                    className="paypal-button-donate-page"
                    type="image"
                    src="https://www.paypalobjects.com/pt_BR/BR/i/btn/btn_donateCC_LG.gif"
                    border="0"
                    name="submit"
                    title="PayPal - The safer, easier way to pay online!"
                    alt="Faça doações com o botão do PayPal"
                  />
                  <img
                    alt=""
                    border="0"
                    src="https://www.paypal.com/pt_BR/i/scr/pixel.gif"
                    width="1"
                    height="1"
                  />
                </form>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Donate;
