import PropTypes from 'prop-types'
import styles from './Cards.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Card_({
    no=0, 
    name="undefined", 
    title="unknown", 
    text="idk tbh"}) {

    const style = {
        width: "18rem",
        
    }
    PropTypes.checkPropTypes(Card_.propTypes, { name, no, title, text }, 'prop', 'Card_');

    const src = `https://dummyimage.com/300X200/92${no}/fff&text=${name}`


    return (
    <Card style={style} bg='dark' text='white'>
        <Card.Img variant="top" src={src} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text className={styles.text}>
                {text}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    );
  }

Card_.PropTypes = {
    name: PropTypes.string,
    no: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string,
  }

  export default Card_