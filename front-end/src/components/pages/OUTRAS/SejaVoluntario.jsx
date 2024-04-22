import "../Post.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const SejaVoluntario = () => {
  return (
    <div className="post-main">
      <h1 className="post-title">Seja um voluntário!</h1>
      <p className="post-text">
        Ajude nossas crianças com seus cuidados, sua companhia e com seus
        serviços para a instituição! Este texto é para encher linguiça, sim, mas
        eu preciso de um texto que dê pelo menos 2 linhas e não sei o que
        escrever
      </p>
      <div className="form-main">
        <Form>
          <Form.Group className="mb-3 form-item" controlId="formBasicEmail">
            <Form.Label>Nome: </Form.Label>
            <Form.Control type="text" placeholder="Digite seu nome completo" />
          </Form.Group>
          <Form.Group className="mb-3 form-item" controlId="formBasicEmail">
            <Form.Label>Email: </Form.Label>
            <Form.Control type="email" placeholder="Digite seu E-mail" />
            <Form.Text className="text-muted">
              Não compartilharemos seu e-mail com terceiros.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3 form-item" controlId="formBasicEmail">
            <Form.Label>Telefone: </Form.Label>
            <Form.Control type="text" placeholder="Digite seu telefone" />
          </Form.Group>
          <Button className="btn-1" variant="custom" type="submit">
            Quero ser um voluntário!
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SejaVoluntario;
