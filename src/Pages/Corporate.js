import React from 'react'
import { Carousel,Row,Col,Container,Button } from 'react-bootstrap';
export default function Corporate() {
  return (
     <section>
     <div style={{height:'500px',width:'100%',backgroundColor:'#3F1585',opacity:'0.9'}}>
        <p style={{fontFamily:'century Gothic',color:'white',fontSize:'50px',fontWeight:'bold',marginLeft:'100px',paddingTop:'40px'}}>CORPORATE EVENT <br></br>MANAGEMENT SERVICES</p>
        <div style={{height:'500px',width:'1200px',backgroundColor:'black',marginLeft:'350px',marginTop:'60px'}}></div>
        {/* <img src={ring} height={100} style={{marginTop:'-800px',marginLeft:'850px'}}></img> */}
        <p style={{marginTop:'-350px',marginLeft:'600px',fontSize:'30px',color:'white',fontWeight:'bold',fontFamily:'century Gothic'}}>Corporate Event Management Company – MICE</p>
        <p style={{marginLeft:'450px',color:'white',fontSize:'20px',letterSpacing:'1.5px'}}>Organising and managing all the requirements for Corporate Events consisting of Meetings, Incentive <br></br>Programs and Conferences including Exhibitions and Expo’s. Right from understanding the objective<br></br> of the corporate event to finding the ideal venue, finest event tech support and supervising all the <br></br> other event related things, Sakura Events will cater and handle your Corporate Events & MICE with<br></br>flawless perfection.</p>
    </div>
    <div style={{height:'500px',width:'1800px',backgroundColor:'#EAEAEA',marginTop:'300px'}}>
      <Row>
        <Col style={{marginLeft:'300px',marginTop:'100px',fontSize:'36px'}}>
        <p>Product Launch, Conference And<br></br> Seminars</p>
        </Col>
        <Col style={{marginTop:'100px',fontSize:'36px'}}>Outdoor Events</Col>
      </Row>
       <Row>
        <Col style={{marginLeft:'300px',lineHeight:'30px',fontSize:'20px',letterSpacing:'1px'}}>As a trusted corporate event management company, a Sakura event<br></br> showcases credible experience in organising conference and seminars<br></br>for top global companies. On the event day, Sakura Events team ensures<br></br> that all the guests invited by the Corporate are engaged, and they enjoy<br></br> the event planned out for them</Col>
        <Col style={{lineHeight:'30px',fontSize:'20px',letterSpacing:'1px'}}>Corporate Off-Sites, Outdoor Corporate Events are handled with expert precision by our event management services team. From venue finding to executing all outdoor event requirements and keeping in mind all safety and security precautions, Sakura Events can take care of all the essential details for outdoor events.</Col>
        </Row>
    </div>
    <div style={{height:'300px',width:'100%',backgroundColor:'grey',textAlign:'center'}}>
    <Row><p style={{marginTop:'50px',fontSize:'30px',color:'white'}}>You Dream, We Theme</p></Row>
    <Row>
    <p style={{marginTop:'30px',fontSize:'20px',color:'white'}}>Our creativity and expertise can help you plan and deliver exceptional events</p>
    </Row>
    
    
    </div>
    </section>
  )
}
