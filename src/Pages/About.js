import React from 'react'
import '../Styles/About.css'
import { Container } from 'react-bootstrap';
import nipun from '../Images/nipun.jpeg'


function About() {
  return (
    <section>
                                      
    <div className='box'>
      <p style={{fontSize:'52px',fontWeight:'15px',color:'white',fontFamily:'century Gothic',wordSpacing:'3px',top:'60px',marginLeft:'120px'}}>What Do We Do</p>
      <ul className='ul1'>
        <li>Corporate Calendar Events</li>
        <li>Promotions & Launches</li>
        <li>Exhibitions Stall Designing</li>
        <li>Event Marketing – Outdoor Media, Radio, Mall Display, Product Branding</li>
        <li>Brand Affiliations & Acquisitions</li>
        <li>Weddings and Destination Weddings</li>
        <li>Social Events</li>
        <li>Event Travel Services</li>
      </ul>
    </div>
    <div className='box1'>
      <Container>
      <p style={{fontSize:'48px',fontFamily:'century Gothic',wordSpacing:'3px',top:'60px',color:'#23222f',lineHeight:'250px'}}>Mission Statement</p>
       <p style={{color:'#23222f',fontSize:'20px',marginTop:'-50px',letterSpacing:'0.5px'}}>Majestic Moments Events’ primary mission is to plan <br></br> and execute outstanding 
      events for each client with <br></br>  exceptional professionalism and the utmost attention to budgets <br></br>and details.</p>
      <img src={nipun} height={200} width={200} style={{borderRadius:'100px'}}></img>
      <h4 style={{marginTop:'-110px',marginLeft:'220px'}}>Team Majestic Moments Events</h4>
      </Container>
    </div>
    
    </section>
  )
}
export default About;
