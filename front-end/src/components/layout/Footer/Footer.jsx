import "../Layout.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faTiktok, faYoutube} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const LinkFacebook = "https://www.facebook.com/viver.br";
  const LinkYoutube = "https://www.youtube.com/@AssociacaViver";
  const LinkInstagram = "https://www.instagram.com/associacaoviver/";

  return (
    <div className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>Sobre a Viver</h4>
            <NavLink className="footer-nav-link-text" to="/ourhistory">
              Nossa História
            </NavLink>
            <NavLink className="footer-nav-link-text" to="/campaings">
              Campanhas
            </NavLink>
            <NavLink className="footer-nav-link-text" to="/projects">
              Projetos
            </NavLink>
            <NavLink className="footer-nav-link-text" to="/mission">
              Missão
            </NavLink>
          </div>
          <div className="sb__footer-links_div">
            <h4>Transparência</h4>
            <NavLink className="footer-nav-link-text" to="/finances">
              Informações Financeiras
            </NavLink>
            <NavLink className="footer-nav-link-text" to="/workplan">
              Plano de Trabalho
            </NavLink>
            <NavLink className="footer-nav-link-text" to="/statute">
              Estatuto Social
            </NavLink>
            <NavLink className="footer-nav-link-text" to="/certificates">
              Certificados
            </NavLink>
          </div>
          <div className="sb__footer-links_div">
            <h4>Nossas parcerias</h4>
            <NavLink className="footer-nav-link-text" to="/">
              Instituto Abraçaí
            </NavLink>
            <NavLink className="footer-nav-link-text" to="/">
              Instituto Fulano
            </NavLink>
            <NavLink className="footer-nav-link-text" to="/">
              Instituto Ciclano
            </NavLink>
            <NavLink className="footer-nav-link-text" to="/">
              Instituto Beltrano
            </NavLink>
          </div>
          <div className="sb__footer-links_div">
            <h4>Quer nos conhecer?</h4>
            <NavLink className="footer-nav-link-text" to="projects">
              Participe de um Projeto
            </NavLink>
            <NavLink className="footer-nav-link-text" to="volunteer">
              Seja um Voluntário
            </NavLink>
            <NavLink className="footer-nav-link-text" to="contact">
              Nosso Contato
            </NavLink>
            <NavLink className="footer-nav-link-text" to="contact">
              Visite-nos
            </NavLink>
          </div>
          <div className="sb__footer-links_div">
            <h4 className="social-links">Siga-nos!</h4>
            <div className="socialmedia">
              <a href={LinkFacebook} className="footer-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href={LinkFacebook} className="footer-icon">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a href={LinkYoutube} className="footer-icon">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href={LinkInstagram} className="footer-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p>
              &#169; {new Date().getFullYear()} Viver. Todos os direitos
              reservados.
            </p>
          </div>
          <div className="sb__footer-below-links">
            <a href="/Terms">
              <div>
                <p>Termos e Condições</p>
              </div>
            </a>
            <a href="/Privacy">
              <div>
                <p>Privacidade</p>
              </div>
            </a>
            <a href="/Security">
              <div>
                <p>Segurança</p>
              </div>
            </a>
            <a href="/Cookies">
              <div>
                <p>Cookies</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
