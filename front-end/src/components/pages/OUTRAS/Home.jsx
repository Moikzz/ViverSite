import "../Post.css";
import BsCarousel from "../../layout/Carousel/BsCarousel.jsx";
import Banner from "../../layout/Banner/Banner.jsx";
import Col from "react-bootstrap/Col";
import BsCard from "../../layout/Card/BsCard.jsx";
import Donate from "./Donate.jsx";

import { GetCardsData } from "../../../data/CardsData.js";
import { cardImageURL } from "../../../utils/Image-Util.js";

function Home() {
  const Cards = GetCardsData();

  return (
    <>
      <BsCarousel />
      <h1 className="post-title-home">Bem vindo ao site da VIVER!</h1>
      <div className="post-text-home">
        <p>O nosso site ainda está em desenvolvimento, então caso você encontre algum erro, entre em contato com o nosso suporte técnico!</p>
      </div>
      <Donate/>
      <h2 className="home-title">Notícias</h2>
      <div className="home-news-cards">
        {Cards.map((card) => {
          return (
            <Col key={card.id}>
              <BsCard
                img={cardImageURL(card.image)}
                title={card.title}
                text={card.text}
              />
            </Col>
          );
        })}
      </div>
      <h2 className="home-title">Campanhas</h2>
      <Banner />
    </>
  );
}

export default Home;

/* 

PÁGINAS:
As páginas, neste atual momento, consistem de: 
  - conjuntos de componentes pré-montados no "Layout"
  - que carregam dados vindos de um "Data" 
  - sendo disponibilizados por uma "Util"


Para importar qualquer tipo de conteúdo, basta você importar a "Data" deste e definir-lo com uma constante.
(exemplo na linha 7)

Após a definição, usa-se o método "Array.prototype.map()" para retornar todo o conteúdo desta "Data". 
(exemplo na linha 18)

A partir deste passo, pode-se manipular o conteúdo usando métodos de manipulação de arrays em Javascript
(métodos como .reduce(), .filter(), .contains() e etc)

Para carregar qualquer tipo de conteúdo importado, é necessário usar a função de uma "util" relacionada aonde o conteúdo está alocado.
(exemplo na linha 22)


Para ver a documentação de uma "Data", dirija-se ao arquivo "CardsData.js", localizado em src/data/CardsData.js
*/