import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "../Post.css";

const CriticaSugestao = () => {
  return (
    <div className="post-main">
      <h1 className="post-title">Elogio / Crítica / Sugestão</h1>
      <p className="post-text">
        análise de avaliação sobre demonstração de apreço ou reconhecimento por
        serviço recebido ou relativo ao atendimento prestado. Manifestação de
        ideia ou proposta para o aprimoramento dos serviços.
      </p>
      <p className="post-text">
        É admitido o recebimento de crítica, elogio ou sugestão de forma
        anônima. No entanto, se preferir informar seus dados, será de maior
        valia na diligência, para o atendimento da demanda.
      </p>
      <InputGroup className="form-main">
        <Form>
          <Form.Group className="mb-3 form-item" controlId="formBasicEmail">
            <Form.Label>Nome: </Form.Label>
            <Form.Control type="text" placeholder="Digite seu nome completo" />
          </Form.Group>
          <Form.Group className="mb-3 form-item"controlId="formBasicEmail">
            <Form.Label>Email: </Form.Label>
            <Form.Control type="email" placeholder="Digite seu E-mail" />
            <Form.Text className="text-muted">
              Não compartilharemos seu e-mail com terceiros.
            </Form.Text>
          </Form.Group>
          <div className="form-item">
          <Form.Label>Digite sua Crítica/Sugestão </Form.Label>
          <Form.Control className="form-text-area" as="textarea" aria-label="With textarea" /> 
          </div>
          <Button className="btn-2" variant="custom" type="submit"> Enviar </Button>
        </Form>
      </InputGroup>
    </div>
  );
};

export default CriticaSugestao;
