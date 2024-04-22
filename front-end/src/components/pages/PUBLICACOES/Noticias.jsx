import "../Post.css";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { GetCardsData } from "../../../data/CardsData.js";
import { cardImageURL } from "../../../utils/Image-Util.js";

const Noticias = () => {
  const Cards = GetCardsData();
  return (
    <div className="post-main">
      <h1 className="post-title">Notícias</h1>
      <div className="posts-content">
        <div className="sort-filter">
          <Form.Select className="sort-table">
            <option>Organizar por</option>
            <option value="1">Postagens mais novas </option>
            <option value="2">Postagens mais antigas </option>
          </Form.Select>
          <Form className="filter-table">
            <p>Filtrar por: </p>
            <div key="radio-key" className="mb-3">
              <Form.Check
                label="Notícias"
                name="group1"
                type="radio"
                id="radio-1"
              />
              <Form.Check
                label="Eventos"
                name="group1"
                type="radio"
                id="radio-2"
              />
              <Form.Check
                label="Postagens"
                name="group1"
                type="radio"
                id="radio-3"
              />
            </div>
          </Form>
        </div>
        <div className="cards-section">
          {Cards.map((item) => {
            return (
                <Card key={item.id} className="news-card">
                  <Card.Img
                    variant="top"
                    className="news-card-image"
                    src={cardImageURL(item.image)}
                  />
                  <Card.Body className="news-card-body">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className="news-card-text">
                      {item.text}
                    </Card.Text>
                    <Button variant="custom" className="custom-button">
                      Leia Mais
                    </Button>
                  </Card.Body>
                </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Noticias;
