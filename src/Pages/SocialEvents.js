import React from 'react'
import { Carousel,Row,Col,Container,Button } from 'react-bootstrap';
import p1 from '../Images/p1.jpg'
import p2 from '../Images/p2.jpg'
import p3 from '../Images/p3.jpg'
import p4 from '../Images/p4.jpg'
import p5 from '../Images/p5.jpg'
import p6 from '../Images/p6.jpg'
export default function SocialEvents() {
  return (
    <section>
     <div style={{height:'500px',width:'1800px',backgroundColor:'#3F1585',opacity:'0.9'}}>
        <p style={{fontFamily:'century Gothic',color:'white',fontSize:'50px',fontWeight:'bold',marginLeft:'100px',paddingTop:'40px'}}>SOCIAL EVENT <br></br>MANAGEMENT SERVICES</p>
        <div style={{height:'500px',width:'1200px',backgroundColor:'black',marginLeft:'350px',marginTop:'60px'}}></div>
        {/* <img src={ring} height={100} style={{marginTop:'-800px',marginLeft:'850px'}}></img> */}
        <p style={{marginTop:'-350px',marginLeft:'600px',fontSize:'30px',color:'white',fontWeight:'bold',fontFamily:'century Gothic'}}>Corporate Event Management Company – MICE</p>
        <p style={{marginLeft:'450px',color:'white',fontSize:'20px',letterSpacing:'1.5px'}}>Organizing social events including birthday celebrations, party event, milestone anniversaries,<br></br> exhibition event, baby showers, themed graduation and farewell parties, and seasonal festivities,<br></br> Sakura Events can help the clients design and plan their event with ease. Theme events with a<br></br> budget outlook can achieve a desirable result for the clients and make the event a memory to<br></br> cherish.</p>
        <p></p>
        </div>
    <div style={{height:'500px',width:'1800px',backgroundColor:'#EAEAEA',marginTop:'300px'}}>
      <Row>
        <Col style={{marginLeft:'300px',marginTop:'100px',fontSize:'36px'}}>
        <p>Party Event</p>
        </Col>
        <Col style={{marginTop:'100px',fontSize:'36px'}}>Exhibition Event</Col>
      </Row>
       <Row>
        <Col style={{marginLeft:'300px',lineHeight:'30px',fontSize:'20px',letterSpacing:'1px'}}>From farewell parties to theme-based birthday parties, Sakura Events is the perfect party event management team for your celebration. Be it a fun DJ Party or an elegant cocktail party, we can arrange the light effects, party décor and food that resonates with your idea of a great party.</Col>
        <Col style={{lineHeight:'30px',fontSize:'20px',letterSpacing:'1px'}}>From small business exhibitions to pan India exhibition event, the exhibition event management team of Sakura events can help you<br></br> with the planning and execution of your exhibition needs.</Col>
        </Row>
    </div>
    <div style={{height:'300px',width:'100%',backgroundColor:'black',color:'white',textAlign:'center'}}>
      <Row>
      <p style={{fontSize:'36px',fontWeight:'bold',marginTop:'20px',letterSpacing:'1px'}}>Party Event</p>
      </Row>
      <p style={{fontSize:'20px'}}>Lively parties make personal bonds stronger. Well-managed events push business growth to new heights. Throw the best part in town with<br></br> Sakura’s customised party event management services. Your guests will remember your parties with our personalised assistance from<br></br> event planning to event execution.</p>
    </div>
    <p style={{fontSize:'36px',letterSpacing:'1px',marginTop:'20px',fontWeight:'bold',textAlign:'center'}}>Photos Of Our Event</p>
    <div>
    <Row>
      <Col>
      <img src={p1} height={400} width={500}style={{marginLeft:'20px'}}></img>
      </Col>
      <Col>
      <img src={p2} height={400} width={500}style={{marginLeft:'20px'}}></img>
      </Col>
      <Col>
      <img src={p3} height={400} width={500}style={{marginLeft:'20px'}}></img>
      </Col>
    </Row>
     <Row style={{marginTop:'20px'}}>
     <Col>
      <img src={p4} height={400} width={500}style={{marginLeft:'20px'}}></img>
      </Col><Col>
      <img src={p5} height={400} width={500}style={{marginLeft:'20px'}}></img>
      </Col><Col>
      <img src={p6} height={400} width={500}style={{marginLeft:'20px'}}></img>
      </Col>
     </Row>
    </div>
    <div style={{height:'200px',width:'100%',backgroundColor:'grey',textAlign:'center',marginTop:'20px'}}>
    <Row><p style={{marginTop:'50px',fontSize:'30px',color:'white'}}>You Dream, We Theme</p></Row>
    <Row>
    <p style={{marginTop:'20px',fontSize:'20px',color:'white'}}>Our creativity and expertise can help you plan and deliver exceptional events</p>
    </Row>
    </div>
    </section>
  )
}
