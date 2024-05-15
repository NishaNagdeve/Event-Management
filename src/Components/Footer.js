import React from "react";
import '../Styles/Footer.css';
import { Container,Row,Col } from 'react-bootstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HomeIcon from '@mui/icons-material/Home';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

function Footer()
{
    return(
        <div>
            <section className='footer'>
                {/* <Container style={{height:'400px'}}> */}
                    <Row className='text-cent py-5' style={{height:'400px'}}>
                        <Col sm={2} style={{marginLeft:'20px'}}>
                            <h4 style={{fontWeight:'bold',color:'white',textDecoration:'none'}}>Services We Offer</h4><br></br>
                            <ul>
                                <a href="/wedding" style={{textDecoration:'none'}}><li style={{color:'white',fontWeight:'bold',fontSize:'20px'}}>Wedding Event</li></a><br></br>
                                <a href="/Corporate" style={{textDecoration:'none'}}><li style={{color:'white',fontWeight:'bold',fontSize:'20px'}}>Corporate Events</li></a><br></br>
                                <a href="/SocialEvents" style={{textDecoration:'none'}}><li style={{color:'white',fontWeight:'bold',fontSize:'20px'}}>Social Events</li></a>
                            </ul>
                        </Col>
                        <Col sm={3} style={{lineHeight:'30px'}}>
                            <h4 style={{fontWeight:'bold',color:'white',textDecoration:'none'}}>Reach Us(Mumbai)</h4>
                                <div style={{color:'white',fontWeight:'bold',fontSize:'20px'}}>
                                <HomeIcon></HomeIcon>India: 5th Floor Sunteck Centre, Subhash Road, Vile Parle East,
                                Mumbai – 400057<br></br>
                                <WhatsAppIcon></WhatsAppIcon>+91 9820054081
                                <br></br><EmailIcon></EmailIcon>admin@majesticmoments.co.in
                                </div>
                        </Col>
                        <Col sm={3} style={{lineHeight:'30px'}}>
                            <h4 style={{fontWeight:'bold',color:'white',textDecoration:'none'}}>Reach Us(Nagpur)</h4>
                                <div style={{color:'white',fontWeight:'bold',fontSize:'20px'}}>
                                <HomeIcon></HomeIcon> Madha Colony, Sitabuldi,<br></br> Nagpur, Maharashtra,<br></br> 440001, India<br></br>
                                <WhatsAppIcon></WhatsAppIcon>+91-8263863091
                                <br></br><EmailIcon></EmailIcon>admin@majesticmoments.co.in
                                </div>
                        </Col>
                        
                        <Col sm={3}>
                            <h4 style={{fontWeight:'bold',color:'white',textDecoration:'none',color:'#d50000',opacity:'0.5'}}>MAJESTIC MOMENTS EVENTS </h4>
                            <h5 style={{marginLeft:'15px',color:'white',fontWeight:'bold',fontSize:'20px',lineHeight:'30px'}}>We are a team of professionals<br></br> and our passion is the creation<br></br> and implementation of creative<br></br>and grand events
                                </h5>
                            <ul className='icons'style={{marginLeft:'50px'}}>
                            <br></br><a href="#"><FacebookIcon style={{fontSize:'35px'}}/></a>
                                <a href="#"style={{marginLeft:'5px'}}><InstagramIcon style={{fontSize:'35px'}}/></a>
                                <a href="#"style={{marginLeft:'5px'}}><YouTubeIcon style={{fontSize:'35px'}}/></a>
                
                            </ul>
                        </Col>
                    </Row>
                {/* </Container> */}
                <hr style={{color:'white',border:'1px solid white'}}/>
                <h6 style={{color:'white',textAlign:'center',height:'40px'}}>Copyright Reserved@2024 Nisha</h6>
            </section>
        </div>
        
    )

}
export default Footer;