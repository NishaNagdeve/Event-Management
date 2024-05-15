import React, { useState } from 'react';
import { Carousel,Row,Col,Container,Button } from 'react-bootstrap';
import ring from '../Images/ring.png'
import wed from '../Images/wed1.jpg'
import theme from '../Images/theme.jpg'
import { Link,useNavigate } from 'react-router-dom';

export default function Wedding() {
    
    const [selectedOption, setSelectedOption] = useState('');
    const [nameOfEvent, setNameOfEvent] = useState('Wedding');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleNavigation = () => {
        sessionStorage.setItem('weddingData', JSON.stringify({
            nameOfEvent,
            destination: selectedOption,
            date
        }));

        navigate('/summary');
        
    };
    
  return (
    <section>
    
    <div style={{height:'500px',width:'100%',backgroundColor:'#3F1585',opacity:'0.9'}}>
        <p style={{fontFamily:'century Gothic',color:'white',fontSize:'50px',fontWeight:'bold',marginLeft:'100px',paddingTop:'40px'}}>WEDDING EVENT <br></br>MANAGEMENT SERVICES</p>
        <div style={{height:'500px',width:'1200px',backgroundColor:'black',marginLeft:'350px',marginTop:'60px'}}></div>
        <img src={ring} height={100} style={{marginTop:'-800px',marginLeft:'850px'}}></img>
        <p style={{marginTop:'-350px',marginLeft:'600px',fontSize:'30px',color:'white',fontWeight:'bold',fontFamily:'century Gothic'}}>DESTINATION WEDDING PLANNER IN INDIA</p>
        <p style={{marginLeft:'450px',color:'white',fontSize:'20px'}}>Weddings by Sakura Events is the company’s luxury line of wedding planning services.</p>
        <p style={{marginLeft:'450px',color:'white',fontSize:'20px'}}>With a team of experienced wedding planners, quality approved vendors and suppliers and a tie up<br></br> with major hotels and venues, Sakura Events helps couples and families plan and execute their dream weddings.</p>
        <p style={{marginLeft:'450px',color:'white',fontSize:'20px'}}>Right from planning an intimate home wedding to a big fat wedding with all the band baja barat, Sakura Events <br></br>understands your detailed requirements and wishes.</p>
    </div>
    <div style={{height:'700px',width:'1800px',backgroundColor:'#EAEAEA',marginTop:'300px'}}>
    <p style={{fontFamily:'century Gothic',color:'black',fontSize:'42px',marginLeft:'500px',paddingTop:'40px'}}>Wedding Events Service Offerings</p>
    <img src={wed} height={550} width={500} style={{marginLeft:'100px'}}></img>
    <p style={{marginTop:'-520px',marginLeft:'620px',fontSize:'25px',color:'black',fontFamily:'century Gothic',fontWeight:'bold'}}>SERVICES THAT WE OFFER:</p>
    <ul style={{marginLeft:'620px',fontSize:'20px',lineHeight:'50px'}}>
        <li>Wedding décor and design services</li>
        <li>Event flow management</li>
        <li>Destination wedding planning & venue selection</li>
        <li>Entertainment activities for wedding guests</li>
        <li>Wedding guest’s management</li>
        <li>Pre wedding event decoration & party organization</li>
        <li>Food and beverages services</li>
        <li>Wedding invitation & other communication services</li>
        <li>Transport & logistics management</li>
    </ul>
    </div>
    <div style={{height:'700px',width:'1800px',backgroundColor:'#EAEAEA',marginTop:'40px'}}>
    <p style={{fontFamily:'century Gothic',color:'black',fontSize:'40px',marginLeft:'500px',fontWeight:'bold'}}>Make your wedding event beautiful with us</p>
    <img src={theme} height={550} width={500} style={{marginLeft:'1200px'}}></img>
    <Row style={{marginLeft:'40px',marginTop:'-500px'}}>
    <Col>
    <h3>Name of Event</h3>
    <input type='text' value={nameOfEvent} onChange={(e) => setNameOfEvent(e.target.value)}></input>
    </Col>
    <Col style={{marginLeft:'-1000px'}}>
    <h3>Destination</h3>
    <select value={selectedOption} onChange={handleSelectChange} style={{height:'30px'}}>
        <option value="">Select</option>
        <option value="Goa">Goa</option>
        <option>Jaipur</option>
        <option>Kerala</option>
        <option>Mumbai</option>
        <option>Pune</option>
        <option>Nagpur</option>
        <option>Konkan</option>
        <option>Punjab</option>
        <option value="Himachal pradesh">Himachal pradesh</option>
        <option>Bihar</option>
    </select>
    </Col>
    <Col style={{marginLeft:'-1000px'}}>
    <h3>Date</h3>
    <input type='date' value={date} onChange={handleDateChange}></input>
    </Col>
    </Row>
    <Row>
        {/* <Col style={{marginTop:'40px',marginLeft:'300px'}}><button style={{width:'150px',backgroundColor:'black',color:'white'}}>NEXT</button></Col> */}
        <Col style={{marginTop:'40px',marginLeft:'300px'}}>
        <Link to= '/Goa' style={{ textDecoration: 'none' }}>
                        <button disabled={!selectedOption} style={{ width: '150px', backgroundColor: 'black', color: 'white' }} onClick={handleNavigation}>NEXT</button>
                    </Link>
                    </Col>            
    </Row>
    
    </div>
    </section>

  )
}