import "../Post.css";
import ImageEstrutural from "../../../assets/images/general/ViverEstrutural.jpg";
import ImageCruzeiro from "../../../assets/images/general/ViverCruzeiro.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contato = () => {
  const linkEstrutural =
    "https://www.google.com/maps/place/Associa%C3%A7%C3%A3o+Viver/@-15.7755298,-48.0025973,17z/data=!3m1!4b1!4m6!3m5!1s0x935a315228a43e31:0x8256f1db6ae6a5bd!8m2!3d-15.7755298!4d-48.0000224!16s%2Fg%2F11gxxnxn54?entry=ttu";
  const linkCruzeiro =
    "https://www.google.com/maps/place/15%C2%B047'29.6%22S+47%C2%B056'32.0%22W/@-15.791597,-47.9425686,20z/data=!4m4!3m3!8m2!3d-15.7915556!4d-47.9422222?entry=ttu";

  return (
    <div className="post-main">
      <h1 className="post-title">Entre em Contato!</h1>
      <div className="post-contact">
        <div className="contact-left">
          <div className="post-address">
            <h3 className="post-title">Local de Atendimento na Cidade Estrutural</h3>
            <p>Setor Oeste, Quadra 06, Área Especial</p>
            <p>Cidade Estrutural - DF | CEP: 71256-300</p>
          </div>
          <div className="post-map">
            <a href={linkEstrutural}>
              <img
                src={ImageEstrutural}
                alt="Imagem do mapa da localização da Sede"
              />
            </a>
          </div>
          <p>
            <span className="post-title">Telefone:</span> (61) 3361-9357
          </p>
        </div>
        <div className="contact-right">
          <div className="post-address">
            <h3 className="post-title">Sede</h3>
            <p>SRES, Quadra 02, Área Especial &apos;A&apos;, Bloco B </p>
            <p>Cruzeiro Velho - DF | CEP: 70648-010</p>
          </div>
          <div className="post-map">
            <a href={linkCruzeiro}>
              <img
                src={ImageCruzeiro}
                alt="Imagem do mapa da localização do Escritório"
              />
            </a>
          </div>
          <p>
            <span className="post-title">Telefone: </span>(61){" "}
            <a href="http://wa.me/+5561984167382" className="post-number-link">
              9 8416-7382 <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </p>
        </div>
      </div>
        <h2><span className="post-title">Email: </span>viver@viver.com</h2>
    </div>
  );
};

export default Contato;
