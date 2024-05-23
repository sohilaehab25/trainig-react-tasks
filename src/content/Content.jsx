import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/content.css'

function BasicExample(props) {
// const title = "from the hell";
  return (
    <>
<Card className={`${props.bgColor} h-30`} style={{ width: '18rem' }}>
    
  {/* <Card.Img variant="top" {props.img} /> */}
  <Card.Img variant="top" src="./images/home.jpg" />
  <Card.Body>
    {/* <Card.Title>{title}</Card.Title> */}
    <Card.Title>{props.title}</Card.Title>
    <Card.Text className='text-light'>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

    
    </>
  );
}

export default BasicExample;