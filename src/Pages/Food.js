import React,{useState} from 'react'
import { Link } from 'react-router-dom'; 
import starter1 from '../Images/starter1.webp'
import starter2 from '../Images/starter2.webp'
import starter3 from '../Images/starter3.webp'
import starter4 from '../Images/starter4.webp'
import main1 from '../Images/main1.jfif'
import main2 from '../Images/main2.jpg'
import main3 from '../Images/main3.jpg'
import main4 from '../Images/main4.jpg'
import rice1 from '../Images/rice1.jfif'
import rice2 from '../Images/rice2.jpg'
import rice3 from '../Images/rice3.jfif'
import rice4 from '../Images/rice4.jpg'
import bread1 from '../Images/bread1.jfif'
import bread2 from '../Images/bread2.jpg'
import bread3 from '../Images/bread3.jfif'
import bread4 from '../Images/bread4.jfif'
import dessert1 from '../Images/dessert1.jfif'
import dessert2 from '../Images/dessert2.jfif'
import dessert3 from '../Images/dessert3.jpg'
import dessert4 from '../Images/dessert4.webp'
import nonstarter1 from '../Images/nonStarter.jfif'
import nonstarter2 from '../Images/nonstarter2.jpg'
import nonstarter3 from '../Images/nonstarter3.jpg'
import nonstarter4 from '../Images/nonstarter4.jpg'
import nonmain1 from '../Images/nonvegmain1.jfif'
import nonmain2 from '../Images/nonvegmain2.jfif'
import nonmain3 from '../Images/nonvegmain3.jfif'
import nonmain4 from '../Images/nonvegmain4.jpg'
import biryani1 from '../Images/biryani1.jfif';
import biryani2 from '../Images/biryani2.jpg';
import biryani3 from '../Images/biryani3.jfif';
import biryani4 from '../Images/biryani4.jfif';


export default function Food() {
   
  const veg = [
    [
        { image: starter1, name: 'Starter 1', price: 'Rs. 100/Plate' },
        { image: starter2, name: 'Starter 2', price: 'Rs. 120/Plate' },
        { image: starter3, name: 'Starter 3', price: 'Rs. 90/Plate' },
        { image: starter4, name: 'Starter 4', price: 'Rs. 110/Plate' }
    ],
    [
      { image: main1,name:'Main course',price: 'Rs. 100/Plate'},
      { image: main2,name:'Main course',price: 'Rs. 100/Plate'},
      { image: main3,name:'Main course',price: 'Rs. 100/Plate'},
      { image: main4,name:'Main course',price: 'Rs. 100/Plate'},

    ],
    [
      { image: rice1,name:'Rice',price: 'Rs. 100/Plate'},
      { image: rice2,name:'Rice',price: 'Rs. 100/Plate'},
      { image: rice3,name:'Rice',price: 'Rs. 100/Plate'},
      { image: rice4,name:'Rice',price: 'Rs. 100/Plate'},

    ],
    [
      { image: dessert1,name:'Dessert',price: 'Rs. 100/Plate'},
      { image: dessert2,name:'Dessert',price: 'Rs. 100/Plate'},
      { image: dessert3,name:'Dessert',price: 'Rs. 100/Plate'},
      { image: dessert4,name:'Dessert',price: 'Rs. 100/Plate'},
    ]
];

const nonveg = [
    [
        { image: nonstarter1, name: 'Non-Starter 1', price: 'Rs. 150/Plate' },
        { image: nonstarter2, name: 'Non-Starter 2', price: 'Rs. 130/Plate' },
        { image: nonstarter3, name: 'Non-Starter 3', price: 'Rs. 140/Plate' },
        { image: nonstarter4, name: 'Non-Starter 4', price: 'Rs. 160/Plate' }
    ],
    [
      {image: nonmain1,name:'Main course',price: 'Rs. 150/Plate'},
      {image: nonmain2,name:'Main course',price: 'Rs. 150/Plate'},
      {image: nonmain3,name:'Main course',price: 'Rs. 150/Plate'},
      {image: nonmain4,name:'Main course',price: 'Rs. 150/Plate'},
    ],
    [
      {image:biryani1,name:'Biryani',price: 'Rs. 150/Plate'},
      {image:biryani2,name:'Biryani',price: 'Rs. 150/Plate'},
      {image:biryani3,name:'Biryani',price: 'Rs. 150/Plate'},
      {image:biryani4,name:'Biryani',price: 'Rs. 150/Plate'},

    ]
];
    const [isVeg, setIsVeg] = useState(true); // Initialize with wedding images
  
    
  return (
<section>
<div style={{ textAlign: 'center', fontSize: '35px', fontWeight: 'bold', marginTop: '40px', letterSpacing: '2px' }}>Checkout Our Packages</div>
<div style={{ borderRadius: '200px', width: '300px', height: '80px', backgroundColor: 'white', marginLeft: '100px', border: '2px solid black' }}>
  <button onClick={() => setIsVeg(true)} style={{ color: 'black', borderRadius: '200px', width: '130px', height: '60px', border: '2px solid white', backgroundColor: isVeg ? 'green' : 'white', marginTop: '13px', marginLeft: '10px', fontSize: '25px' }}>Veg</button>
  <button onClick={() => setIsVeg(false)} style={{ color: 'black', borderRadius: '200px', width: '130px', height: '60px', fontSize: '25px', border: '2px solid white', backgroundColor: isVeg ? 'white' : 'red', marginLeft: '15px',marginTop:'10px' }}>NonVeg</button>
</div>


{isVeg ? (
          <div>
           
            {veg.map((categoryImages, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                {categoryImages.map((item, imageIndex) => (
                  <div key={imageIndex} style={{ width: '25%', padding: '10px' }}>
                    <div style={{ height: '300px', backgroundColor: 'white', borderRadius: '15px', border: '1px solid black' }}>
                      <Link to='/Form'>
                        <img src={item.image} alt={`Food ${index}-${imageIndex}`} width={260} height={200} style={{ borderRadius: '15px', objectFit: 'cover', width: '100%', height: '100%' }} />
                      </Link>
                    </div>
                    <p style={{ fontSize: '20px', textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>{item.name}</p>
                    <p style={{ fontSize: '20px', textAlign: 'center', marginTop: '-15px', color: 'blue' }}>{item.price}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div>
            {/* Render non-vegetarian images */}
            {nonveg.map((categoryImages, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                {categoryImages.map((item, imageIndex) => (
                  <div key={imageIndex} style={{ width: '25%', padding: '10px' }}>
                    <div style={{ height: '300px', backgroundColor: 'white', borderRadius: '15px', border: '1px solid black' }}>
                      <Link to='/Form'>
                        <img src={item.image} alt={`Food ${index}-${imageIndex}`} width={260} height={200} style={{ borderRadius: '15px', objectFit: 'cover', width: '100%', height: '100%' }} />
                      </Link>
                    </div>
                    <p  style={{ fontSize: '20px', textAlign: 'center', fontWeight: 'bold', marginTop: '10px' }}>{item.name}</p>
                    <p style={{ fontSize: '20px', textAlign: 'center', marginTop: '-15px', color: 'blue' }}>{item.price}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </section>
    );
}
     

