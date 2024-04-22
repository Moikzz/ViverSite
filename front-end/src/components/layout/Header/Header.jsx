import "../Layout.css";

import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram ,faTiktok, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button'

function Header({ telefone, whatsapp }) {
  const LinkWhatsapp = "https://wa.me/+5561984167382?text=Ola!%20Eu%20gostaria%20de%20entrar%20em%20contato!";
  const LinkFacebook = "https://www.facebook.com/viver.br"
  const LinkInstagram = 'https://www.instagram.com/associacaoviver/'
  const LinkYoutube = 'https://www.youtube.com/@AssociacaViver'

  return (
    <div className="header">
      <div className="header-texts">
        <div className="header-text">
          <p>Desenvolvimento das Atividades na Cidade Estrutural/DF: </p>
          <a className="header-number">
            {telefone || "+55 61 3361-9357"} 
          </a>
        </div>
        <div className="header-text">
          <p>Escritório Administrativo Cruzeiro Velho/DF: </p>
          <a className="header-number-whatsapp" href={LinkWhatsapp}>
            {whatsapp || "+55 61 9 8416-7382"} <FontAwesomeIcon icon={faWhatsapp}/>
          </a>
        </div>
      </div>
      <div className="donate-button">
      <NavLink to='donate'>
        <Button variant="custom" className="header-donate-button">Doe Aqui!</Button>
      </NavLink>
      </div>
      <div className="header-main-container">
        <div className="header-icon-container">
          <a className="header-icon" href={LinkInstagram} >
            <FontAwesomeIcon icon={faInstagram}/>
          </a>
        </div>
        <div className="header-icon-container">
          <a className="header-icon" href={LinkYoutube} >
            <FontAwesomeIcon icon={faYoutube}/>
          </a>
        </div>
      <div className="header-icon-container">
          <a className="header-icon" href={LinkFacebook} >
            <FontAwesomeIcon icon={faFacebookF}/>
          </a>
        </div>
        <div className="header-icon-container">
          <a className="header-icon">
            <FontAwesomeIcon icon={faTiktok}/>
          </a>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {
  telefone: PropTypes.any,
  whatsapp: PropTypes.any,
};
export default Header;

/*
COMPONENTES:
Os componentes são blocos de código, estruturados em funções, que retornam tags de markup para o site.
A estrurura de um componente consiste em:


QUALQUER IMPORT necessário para o componente funcionar;

function Componente({possíveis props}) {

  QUALQUER CONSTANTE/VARIÁVEL que precise ser declarada
  QUALQUER FUNÇÃO que precise ser feita

  return (
    Markup do site (tags de marcação como <div></div>, <h1></h1>, etc)
  );
}

QUALQUER LÓGICA para validação do componente ()

export default Componente; (por convenção, o nome do componente deve começar com letra maiúscula)



PROPS: 
Props são dados que podem ser recebidos como argumentos de uma função. eles podem ser de Strings a Objetos.
(exemplo na linha 10)

***Todavia, para o recebimento de objetos, é necessário realizar o método array.prototype.map() para passar um objeto como uma child.***
(exemplo na página "Home.jsx")

- Pode-se também definir valores Default para "props" usando o símbolo "||", evitando que o componete fique vazio ou retorne um erro por alguma dependência
(exemplo na linha 22)



ESTILIZAÇÃO:
- O Site conta com a livraria React-Bootstrap para agilidade na construção de items visuais.
- O site também conta com a livraria React-Font-Awsome para as imagens de ícones, tanto  gerais como de redes sociais
- todavia, toda a estilização extra dos componentes foi re-alocada para o arquivo "Layout.css", localizado na mesma pasta onde os componentes residem

- Para estilizar um novo componente, cria-se um argumento "className" sendo o valor o nome da classe criada no "Layout.css"
(exemplo na linha 17)



Para a documentação de Páginas, vá para o arquivo "Home.jsx" localizado em "src/components/pages/OUTRAS/Home.jsx"
*/