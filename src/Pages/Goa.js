
import React from 'react';
import '../Styles/Goa.css';
import { Card, Carousel, Row, Col, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import venue1 from '../Images/venue1.webp';
import venue2 from '../Images/venue1.1.jfif';
import venue3 from '../Images/venue1.2.jfif';
import white from '../Images/white1.jpg';
import white1 from '../Images/white1.1.jpg';
import white2 from '../Images/white1.2.jfif';
import royal1 from '../Images/Royal1.jfif';
import royal2 from '../Images/Royal.jpg';
import royal3 from '../Images/royal3.jpg';
import pink1 from '../Images/pink.PNG';
import pink2 from '../Images/pink1.PNG';
import pink3 from '../Images/pink3.jpg';
import dark1 from '../Images/dark.2001';
import dark2 from '../Images/dark1.jfif';
import dark3 from '../Images/dark3.jfif';

export default function Goa() {
  const venues = [
    { hall: 'Beach Wedding', price: 54500, images: [venue1, venue2, venue3] },
    { hall: 'White Wedding', price: 54500, images: [white, white1, white2] },
    { hall: 'Royal Wedding', price: 54500, images: [royal1, royal2, royal3] },
    { hall: 'Pink Wedding', price: 54500, images: [pink1, pink2, pink3] },
    { hall: 'Dark Wedding', price: 54500, images: [dark1, dark2, dark3] }
  ];
  const handleBook = (hall, price) => {
    sessionStorage.setItem('selectedHall', hall);
    sessionStorage.setItem('selectedPrice', price);
  };

  return (
    <Container>
      <div>
        <div className='heading' style={{ fontSize: '30px', textAlign: 'center', fontFamily: 'san-serif' }}>According To your destination,we have the following Halls and theme<br></br>Select According To it</div>
        <Row style={{ marginTop: '40px' }}>
          {venues.map((venue, index) => (
            <Col key={index} xs={12} sm={6} md={4} style={{ marginBottom: '20px' }}>
              <Card style={{ width: '25rem' }} className='card1'>
                <Carousel>
                  {venue.images.map((image, idx) => (
                    <Carousel.Item key={idx}>
                      <img
                        className="d-block w-100"
                        src={image}
                        height={250}
                        alt={venue.hall}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
                <Card.Body style={{ textAlign: 'center' }} >
                  <Card.Title>{venue.hall}</Card.Title>
                  <Card.Text>
                    <p style={{ fontWeight: 'bold' }}>Price: {venue.price} Rs.</p>
                    <Link to='/Food'>
                      <button className="button-grow" style={{ backgroundColor: 'skyblue', width: '100px',marginTop:'10px' }} onClick={() => handleBook(venue.hall, venue.price)}>Book</button>
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}
