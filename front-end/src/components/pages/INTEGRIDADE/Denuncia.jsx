import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import "../Post.css";

const Denuncia = () => {
  return (
    <div className="post-main">
      <h1 className="post-title">Denúncia</h1>
      <p className="post-text-bold">
        Formule a exposição dos fatos presenciados ou de seu conhecimento de forma sucinta e respeitosa.
      </p>
      <p className="post-text">
      <span className="post-text-bold">Denúncia:</span> comunicação de irregularidades ocorridas ou indício de exercício negligente ou abusivo de empregos e funções, como também atos disciplinares ou prática de atos de corrupção ou improbidade administrativa.
      </p>
      <p className="post-text-bold">
      É admitido o recebimento de denúncia anônima. No entanto, se preferir informar seus dados, será garantida ao denunciante a condição de sigilo, caso seja de seu interesse, bastando que informe no formulário essa condição.
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
          <Form.Label>Digite sua Denúncia </Form.Label>
          <Form.Control className="form-text-area" as="textarea" aria-label="With textarea" /> 
          </div>
          <Button className="btn-2" variant="custom" type="submit"> Enviar </Button>
        </Form>
      </InputGroup>
    </div>
  )
}

export default Denuncia