import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import image1 from "../images/card1.jpg";
import image2 from "../images/card2.jpg";
import image3 from "../images/card3.jpg";
import image4 from "../images/card4.jpg";
import image5 from "../images/card5.jpg";
import image6 from "../images/card6.jpg";
import image7 from "../images/card7.jpg";
import image8 from "../images/card8.jpg";

import myimg1 from "../images/banner1.jpg";
import myimg2 from "../images/banner2.jpg";
import myimg3 from "../images/banner3.jpg";


const Home = () => {
  const cardData = [
    {
      id: 1,
     img :image1,
      title: "Matthew",
      text: "Software Developer",
      buttonText: "Know More"
    },
    {
      id: 2,
      img :image2,
      title: "John",
      text: "Hiring Manager",
      buttonText: "Know More"
    },
    {
      id: 3,
      img :image3,
      title: "Albert",
      text: "Architect",
      buttonText: "Know More"
    },
    {
      id: 4,
      img :image4,
      title: "Sara",
      text: "Manager",
      buttonText: "Know More"
    },
    {
      id: 5,
      img :image5,
      title: "Angelina",
      text: "Senior Manager",
      buttonText: "Know More"
    },
    {
      id: 6,
      img :image6,
      title: "Jack",
      text: "Senior Architect",
      buttonText: "Know More"
    },
    {
      id: 7,
      img :image7,
      title: "Bella",
      text: "Product Manager",
      buttonText: "Know More"
    },
    {
      id: 8,
      img :image8,
      title: "Philips",
      text: "Client Relationship Officer",
      buttonText: "Know More"
    }
  ];
  return (
    <>
 
     <Carousel>
      <Carousel.Item>
       <img src={myimg1} style={{width:"100%",height:"650px"}} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={myimg2} style={{width:"100%",height:"650px"}} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={myimg3} style={{width:"100%",height:"650px"}} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

<div>
  <h1 style={{textAlign:"center",paddingTop:"50px",fontWeight:"bolder",color:"orangered",textShadow:"0px 2px black"}}>Working Employee</h1>
</div>

    <Container className="my-5">
  <Row xs={1} md={2} lg={3} xl={4} className="g-4">
    {cardData.map((card) => (
      <Col key={card.id}>
        <Card style={{ width: '18rem', height: "100%" }}> 
          <Card.Img 
            variant="top" 
            src={card.img} 
            style={{ 
              height: "300px", 
              objectFit: "cover" 
            }} 
          />
          <Card.Body className="d-flex flex-column"> 
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
            <Button 
              variant="primary" 
              className="mt-auto"  
            >
              {card.buttonText}
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>

   
    
    </>
  );
};

export default Home;

