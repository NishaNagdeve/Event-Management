import React,{Component} from 'react';
import '../Styles/Home.css';
// import '../Styles/Responsive.css';
import { Carousel,Row,Col,Container,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import corporate from '../Images/wedding.jpg';
import conference from '../Images/Confe.jpg';
import bday from '../Images/bday1.jpg';
import bday1 from '../Images/bday.jpg'
import birthday from '../Images/birthday.jpg';
import food from '../Images/food.jpg'
import garba from '../Images/garba.jfif'
import party from '../Images/party.jpg'
import party1 from '../Images/party1.jpg'
import party2 from '../Images/party2.jpg'
import party3 from '../Images/party2.png'
import wed from '../Images/wed.jpg'
import decor from '../Images/decor.jpg';
import baby from '../Images/baby.png'



function Home() {
  
  return (
    <section>
    <Carousel>
      <Carousel.Item interval={3000}>
      <div className="carousel-item-wrapper">
        <img
          className="d-block w-100 carousel-image fade-in" src={conference} alt="First slide"
        />
        <div className="carousel-caption">
            <h3>WELCOME TO MAJESTIC MOMENTS EVENTS</h3>
            <h5>We are a team of professionals and our passion is the creation and implementation of creative and grand events</h5>
          </div>
        </div>
      </Carousel.Item>
    
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel-image  fade-in"
          src={corporate}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel-image  fade-in"
          src={bday}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 carousel-image  fade-in"
          src={baby}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
    <p className='p1'>MAJESTIC MOMENTS EVENTS</p>
    <p className='p2'>A Complete Event Management Solution</p>
    <p className='p3'>The Most Successful Event Is The One That Achieves Your Goals And Exceeds Your<br></br> Expectations. Majestic moments Events Does Just That!</p>
    <Button className='button' style={{backgroundColor:'white',color:'black',borderColor:'black',}}>READ MORE ABOUT</Button>
    <Carousel>
    <Carousel.Item  interval={3000}>
          <Row >
            <Col>
              <img
                className="d-block w-100 carousel-image1"
                src={food}
                alt="Second slide" style={{height:'350px',width:'400px'}} 
              />
            </Col>
            <Col>
              <img
                className="d-block w-100 carousel-image1"
                src={garba}
                alt="Second slide" style={{paddingLeft:'0px'}}
              />
            </Col>
            <Col>
              <img
                className="d-block w-100 carousel-image1"
                src={party}
                alt="Second slide"
              />
            </Col>
            <Col>
              <img
                className="d-block w-100 carousel-image1"
                src={party1}
                alt="Second slide"
              />
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item  interval={3000}>
          <Row >
            <Col>
              <img
                className="d-block w-100 carousel-image1"
                src={garba}
                alt="Second slide" style={{height:'350px',width:'400px'}} 
              />
            </Col>
            <Col>
              <img
                className="d-block w-100 carousel-image1"
                src={wed}
                alt="Second slide"
              />
            </Col>
            <Col>
              <img
                className="d-block w-100 carousel-image1"
                src={party1}
                alt="Second slide"
              />
            </Col>
            <Col>
              <img
                className="d-block w-100 carousel-image1"
                src={party2}
                alt="Second slide"
              />
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
        <>
        <div className='divi'>
          <img src={party3} width={700} height={900} style={{marginLeft:'20px',marginTop:'20px'}}/>
          <h4 style={{marginTop:'-600px',marginLeft:'800px',fontSize:'52px',color:'white'}}>Mission Statement</h4>
          <p style={{marginLeft:'200' ,fontSize:'20px',color:'white',paddingLeft:'800px',marginTop:'50px',fontWeight:'bold'}}>Sakura Events’ primary mission is to plan and execute outstanding events for each client<br></br>with exceptional professionalism and utmost attention to budgets and details.</p>
           <Row style={{marginTop:'40px'}}>
            <Col>
            <p style={{marginLeft:'850px',fontSize:'40px',fontWeight:'bold',color:'white'}}>325</p>
            </Col>
            <Col>
            <p style={{marginLeft:'80px',fontSize:'40px',fontWeight:'bold',color:'white'}}>325</p>
            </Col>
            <Col>
            <p style={{marginLeft:'-5px',fontSize:'40px',fontWeight:'bold',color:'white'}}>325</p>
            </Col>
            <Col>
            <p style={{marginLeft:'-80px',fontSize:'40px',fontWeight:'bold',color:'white'}}>325</p>
            </Col>
           </Row>
           <Row style={{marginTop:'2px'}}>
            <Col>
            <p style={{marginLeft:'850px',fontSize:'20px',fontWeight:'bold',color:'white'}}>EVENTS</p>
            </Col>
            <Col>
            <p style={{marginLeft:'80px',fontSize:'20px',fontWeight:'bold',color:'white'}}>CLIENTS</p>
            </Col>
            <Col>
            <p style={{marginLeft:'-5px',fontSize:'20px',fontWeight:'bold',color:'white'}}>VIDEOS</p>
            </Col>
            <Col>
            <p style={{marginLeft:'-80px',fontSize:'20px',fontWeight:'bold',color:'white'}}>IMAGES</p>
            </Col>
           </Row>
        </div>
        </>
        <p className='p4'>OUR SERVICES</p>
        <p className='p5'style={{marginTop:'20px'}}>What We Offer</p>
        <Container>
        
          <Row>
            <Col>
          <Button className='button1' style={{backgroundColor:'#f3f3f3',color:'black',borderColor:'black',fontWeight:'bold',fontSize:'20px'}}>Weddings</Button>
           </Col>
           <Col>
           <Button className='button1'  style={{backgroundColor:'#f3f3f3',color:'black',borderColor:'black',fontWeight:'bold',fontSize:'20px',marginLeft:'60px'}}>Social Events</Button>
           </Col>
           <Col>
           <Button className='button1' style={{backgroundColor:'#f3f3f3',color:'black',borderColor:'black',fontWeight:'bold',fontSize:'20px',marginLeft:'60px'}}>Corporate</Button>
           </Col>
           </Row>
        </Container>
        <Container>
        <div className="carousel-item-wrapper1">
        <img
          className="d-block " src={decor} alt="First slide" height={600} width={1300} style={{marginTop:'40px'}}
        />
        <div className="carousel-caption1">
            <h3 style={{marginTop:'40px',marginLeft:'40px',fontSize:'28px',fontWeight:'bolder'}}>Wedding Event Management Company</h3>
            <p style={{marginTop:'20px',marginLeft:'40px',lineHeight:'30px',fontSize:'18px'}}>
            Sakura Events offers comprehensive wedding packages for all types of wedding<br></br> celebrations. 
            Pre Wedding, Wedding and Post Wedding functions and parties are<br></br> planned with careful thought
             and conceptualization. Our highly trained wedding<br></br> planners connect with each couple’s 
             and their family’s requirement, understand their<br></br> story and deliver their vision in a 
             way that is respectful to their unique style, personality<br></br> and budget.</p>
          </div>
        </div>
        </Container>
    </section>
    
    
  )
}

export default Home;
