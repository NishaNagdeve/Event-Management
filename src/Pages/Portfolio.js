
import React,{useState} from 'react'
import '../Styles/Portfolio.css'
import { Row,Col,Container,Button } from 'react-bootstrap';
import events from '../Images/events.jpg'
import wed1 from '../Images/wed1.jpg'
import wed2 from '../Images/wed2.jpg'
import wed3 from '../Images/wed3.jpg'
import wed4 from '../Images/wed4.jpg'
import wed5 from '../Images/wed5.jpg'
import wed6 from '../Images/wed6.jpg'
import wed7 from '../Images/wed7.jpg'
import wed8 from '../Images/wed8.jpg'
import wed9 from '../Images/wed9.jpg'
import wed10 from '../Images/wed10.jpg'
import wed11 from '../Images/wed11.jpg'
import wed12 from '../Images/wed12.jpg'
import wed13 from '../Images/wed13.jpg'
import wed14 from '../Images/Confe.jpg'
import wed15 from '../Images/conference.jpg'
import wed16 from '../Images/corporate.jfif'
import wed17 from '../Images/baby.png'
import wed18 from '../Images/bday.jpg'
import wed19 from '../Images/bday1.jpg'
import wed20 from '../Images/birthday.jpg'
import wed21 from '../Images/dj.jfif'
import wed22 from '../Images/garba.jfif'
import wed23 from '../Images/dj1.jpg'
import wed24 from '../Images/white1.jpg'
import wed25 from '../Images/dark3.jfif'
import wed26 from '../Images/pink3.jpg'
import wed27 from '../Images/pink.PNG'

export default function Portfolio() {
 
  const all = [
    [wed1, wed2, wed3],
    [wed4, wed5, wed6],
    [wed7, wed8, wed9],
    [wed10, wed11, wed12]
  ];
  const weddingImages = [
    [wed24, wed25, wed26],
    [wed1, wed2, wed3],
    [wed27, wed8, wed9]
  ];

  const corporateImages = [
   [wed11,wed12,wed13],
   [wed14,wed15,wed15]
  ];

  const socialEventImages = [
    [wed17,wed18,wed19],
    [wed20,wed21,wed22],
  ];

  const [displayedImages, setDisplayedImages] = useState(all); // Initialize with wedding images

  const handleCategoryChange = (category) => {
    switch (category) {
      case 'all':
        setDisplayedImages(all);
        break;
      case 'wedding':
        setDisplayedImages(weddingImages);
        break;
      case 'corporate':
        setDisplayedImages(corporateImages);
        break;
      case 'social':
        setDisplayedImages(socialEventImages);
        break;
      default:
        setDisplayedImages(weddingImages);
    }
  };
  return (
    <section>
    
    <img src={events} height={450} style={{width:'100%'}}></img>
    {/* <p style={{marginTop:'-90px',fontSize:'60px',fontWeight:'bold',letterSpacing:'3px'}}>EVENTS</p> */}
    {/* <Container> */}
    <Row>
        <Col>
          <Button className='b1' style={{ backgroundColor: 'red', color: 'white', height: '50px', width: '60px', fontWeight: 'bold', marginLeft: '600px' }} onClick={() => handleCategoryChange('all')}>ALL</Button>
        </Col>
        <Col>
          <Button className='b1' style={{ backgroundColor: 'black', color: 'white', height: '50px', width: '120px', fontWeight: 'bold', marginLeft: '-0px' }} onClick={() => handleCategoryChange('wedding')}>WEDDINGS</Button>
        </Col>
        <Col>
          <Button className='b1' style={{ backgroundColor: 'black', color: 'white', height: '50px', width: '120px', fontWeight: 'bold', marginLeft: '-220px' }} onClick={() => handleCategoryChange('corporate')}>CORPORATE</Button>
        </Col>
        <Col>
          <Button className='b1' style={{ backgroundColor: 'black', color: 'white', height: '50px', width: '150px', fontWeight: 'bold', marginLeft: '-440px' }} onClick={() => handleCategoryChange('social')}>SOCIAL EVENTS</Button>
        </Col>
      </Row>
      
      {displayedImages.map((imageRow, index) => (
        <Row sm={3} key={index} style={{ marginTop: '40px' }}>
          {imageRow.map((imageSrc, innerIndex) => (
            <Col key={innerIndex}>
              <img src={imageSrc} height={300} width={350} style={{ marginLeft: innerIndex === 0 ? '330px' : innerIndex === 1 ? '130px' : '-70px' }} alt={`Image ${innerIndex + 1}`}></img>
            </Col>
          ))}
        </Row>
      ))}
    </section>
  );
}