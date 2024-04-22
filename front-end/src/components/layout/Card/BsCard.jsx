import '../Layout.css'
import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types";

function BsCard({title, text, img}) {
  return (
    <Card className='card-main'>
      <Card.Img  src={img} alt={title} variant="top" className='card-image' />
      <Card.Body className='card-body'>
        <Card.Title>{title || 'Título do Card'} </Card.Title>
        <Card.Text>{text || 'Texto do card'}</Card.Text>
      </Card.Body>
    </Card>
  );
}

BsCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.any
}

export default BsCard;