
import React,  { useState, useEffect } from 'react';
import '../Styles/Form.css';
import { Col, Row } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'; 
import Checkbox from '@mui/material/Checkbox'; 
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank'; 
import CheckBoxIcon from '@material-ui/icons/CheckBox'; 
// import { Link } from '@material-ui/core';
import { Link } from 'react-router-dom';


export default function Form1() {
    // const icon = <CheckBoxOutlineBlankIcon fontSize="small" />; 
    // const checkedIcon = <CheckBoxIcon fontSize="small" />; 

    // //Our sample dropdown options 
    // const options = ['Fries','Kabab','Pasta','Chili Paneer'];
    // const options1 = ['Gatta Curry','Shahi Paneer','Kofta','Veg Patiala'];
    // const options2 = ['Nan','Butter Roti','Lacha Paratha','Tandori Roti'];
    // const options3 = ['GulabJamun','Rasgulla','Rasmalai','Jalebi'];
    // const [starters, setStarters] = useState([]);
    // const [mainCourse, setMainCourse] = useState([]);
    // const [breads, setBreads] = useState([]);
    // const [dessert, setDessert] = useState([]);
    // const [vegGuests, setVegGuests] = useState(20); // Default number of veg guests
    // const [nonVegGuests, setNonVegGuests] = useState(0); 

    // const starterPrice = 10; // Price of one starter
    // const mainCoursePrice = 20; // Price of one main course
    // const breadPrice = 5; // Price of one bread
    // const dessertPrice = 40; // Price of one dessert

    // const totalPriceStarters = starters.length * starterPrice * (vegGuests + nonVegGuests);
    // const totalPriceMainCourse = mainCourse.length * mainCoursePrice * (vegGuests + nonVegGuests);
    // const totalPriceBreads = breads.length * breadPrice * (vegGuests + nonVegGuests);
    // const totalPriceDessert = dessert.length * dessertPrice * (vegGuests + nonVegGuests);

    // // Total price for all dishes
    // const totalPrice = totalPriceStarters + totalPriceMainCourse + totalPriceBreads + totalPriceDessert;
    // // After calculating total prices
    // sessionStorage.setItem('totalPrice', totalPrice);
    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />; 
    const checkedIcon = <CheckBoxIcon fontSize="small" />; 

    // Sample dropdown options 
    const options = ['Fries', 'Kabab', 'Pasta', 'Chili Paneer'];
    const options1 = ['Gatta Curry', 'Shahi Paneer', 'Kofta', 'Veg Patiala'];
    const options2 = ['Nan', 'Butter Roti', 'Lacha Paratha', 'Tandori Roti'];
    const options3 = ['GulabJamun', 'Rasgulla', 'Rasmalai', 'Jalebi'];
    
    const [starters, setStarters] = useState([]);
    const [mainCourse, setMainCourse] = useState([]);
    const [breads, setBreads] = useState([]);
    const [dessert, setDessert] = useState([]);
    const [vegGuests, setVegGuests] = useState(20);
    const [nonVegGuests, setNonVegGuests] = useState(0); 

    const starterPrice = 10;
    const mainCoursePrice = 20;
    const breadPrice = 5;
    const dessertPrice = 40;

    useEffect(() => {
        
        // Calculate total price for starters
        const totalPriceStarters = starters.length * starterPrice * (vegGuests + nonVegGuests);
        // Calculate total price for main course
        const totalPriceMainCourse = mainCourse.length * mainCoursePrice * (vegGuests + nonVegGuests);
        // Calculate total price for breads
        const totalPriceBreads = breads.length * breadPrice * (vegGuests + nonVegGuests);
        // Calculate total price for dessert
        const totalPriceDessert = dessert.length * dessertPrice * (vegGuests + nonVegGuests);
        // Calculate total price for all dishes
        const totalPrice = totalPriceStarters + totalPriceMainCourse + totalPriceBreads + totalPriceDessert;

        // Store total price in sessionStorage
        sessionStorage.setItem('totalPrice', totalPrice.toString());
    }, [starters, mainCourse, breads, dessert, vegGuests, nonVegGuests]);

    return (
        <section>
            <div style={{ backgroundColor:'#BE2D30', height:'2000px' }}></div>
            <div style={{ height:'1300px', width:'1200px', backgroundColor:'white', marginLeft:'220px', marginTop:'-1780px' }}>
                <Row>
                    <Col>
                        <p style={{ fontSize:'20px', color:'white', fontWeight:'bold', marginTop:'-100px', marginLeft:'430px' }}>Veg Guest</p>
                        <input type='text'style={{ marginTop:'-100px', width:'150px', marginLeft:'430px' }}></input>
                    </Col>
                    <Col>
                        <p style={{ fontSize:'20px', color:'white', fontWeight:'bold', marginTop:'-100px', marginLeft:'50px' }}>Non-Veg Guest</p>
                        <input type='number' style={{ marginTop:'-100px', width:'150px', marginLeft:'50px' }}></input>
                    </Col>
                </Row>
                <p className='line' style={{ fontSize:'36px', color:'black', textAlign:'center', marginTop:'30px',border:'0.4px dashed rgb(66,72,78)'}}>Create your menu</p>
                <h3 style={{textAlign:'center'}}>Starters</h3>
                <div style={{ marginLeft: '20%', marginTop: '40px' }}> 
                     
                    <Autocomplete 
                        multiple 
                        id="checkboxes-tags-demo"
                        options={options} 
                        onChange={(event, value) => setStarters(value)}
                        renderOption={(option, { selected }) => ( 
                            <React.Fragment> 
                                <Checkbox 
                                    icon={icon} 
                                    checkedIcon={checkedIcon} 
                                    style={{ marginRight: 8 }} 
                                    checked={selected} 
                                /> 
                                {option} 
                            </React.Fragment> 
                        )} 
                        style={{ width: 800}} 
                        renderInput={(params) => ( 
                            <TextField 
                                {...params} 
                                variant="outlined"
                                // label="Checkboxes"
                                placeholder="Select Starter" 
                            /> 
                        )} 
                    /> 
                </div>
                <h3 style={{textAlign:'center',marginTop:'40px'}}>Main Course</h3>
                <div style={{ marginLeft: '20%', marginTop: '40px' }}> 
                     
                    <Autocomplete 
                        multiple 
                        id="checkboxes-tags-demo"
                        options={options1} 
                        onChange={(event, value) =>setMainCourse(value)}
                        renderOption={(option, { selected }) => ( 
                            <React.Fragment> 
                                <Checkbox 
                                    icon={icon} 
                                    checkedIcon={checkedIcon} 
                                    style={{ marginRight: 8 }} 
                                    checked={selected} 
                                /> 
                                {option} 
                            </React.Fragment> 
                        )} 
                        style={{ width: 800 }} 
                        renderInput={(params) => ( 
                            <TextField 
                                {...params} 
                                variant="outlined"
                                // label="Checkboxes"
                                placeholder="Select Starter" 
                            /> 
                        )} 
                    /> 
                </div>
                <h3 style={{textAlign:'center',marginTop:'40px'}}>Breads</h3>
                <div style={{ marginLeft: '20%', marginTop: '40px' }}> 
                     
                    <Autocomplete 
                        multiple 
                        id="checkboxes-tags-demo"
                        options={options2} 
                        onChange={(event, value) =>setBreads(value)}
                        renderOption={(option, { selected }) => ( 
                            <React.Fragment> 
                                <Checkbox 
                                    icon={icon} 
                                    checkedIcon={checkedIcon} 
                                    style={{ marginRight: 8 }} 
                                    checked={selected} 
                                /> 
                                {option} 
                            </React.Fragment> 
                        )} 
                        style={{ width: 800 }} 
                        renderInput={(params) => ( 
                            <TextField 
                                {...params} 
                                variant="outlined"
                                // label="Checkboxes"
                                placeholder="Select Starter" 
                            /> 
                        )} 
                    /> 
                </div>
                <h3 style={{textAlign:'center',marginTop:'40px'}}>Dessert</h3>
                <div style={{ marginLeft: '20%', marginTop: '40px' }}> 
                     
                    <Autocomplete 
                        multiple 
                        id="checkboxes-tags-demo"
                        options={options3} 
                        onChange={(event, value) =>setDessert(value)}
                        renderOption={(option, { selected }) => ( 
                            <React.Fragment> 
                                <Checkbox 
                                    icon={icon} 
                                    checkedIcon={checkedIcon} 
                                    style={{ marginRight: 8 }} 
                                    checked={selected} 
                                /> 
                                {option} 
                            </React.Fragment> 
                        )} 
                        style={{ width: 800 }} 
                        renderInput={(params) => ( 
                            <TextField 
                                {...params} 
                                variant="outlined"
                                // label="Checkboxes"
                                placeholder="Select Starter" 
                            /> 
                        )} 
                    /> 
                </div>
                <h3 style={{textAlign:'center',marginTop:'30px'}}>Starter {starters.length}+mainCourse {mainCourse.length}+Breads {breads.length}+Dessert {dessert.length}</h3>
            
            <div style={{ textAlign: 'center', marginTop: '20px'}}>
            <p className='price'>Total Price:</p>
                <p className='price' >Starters: {starters.length * starterPrice}</p>
                <p className='price'>Main Course: {mainCourse.length * mainCoursePrice}</p>
                <p className='price'>Breads: {breads.length * breadPrice}</p>
                <p className='price'>Dessert: {dessert.length * dessertPrice}</p>
                <p className='price'>Total: {sessionStorage.getItem('totalPrice')}</p>
                <h4 style={{color:'red'}}>Disclaimer:Price based on per plate</h4>
            </div>
               <Link to='/Summary'><button type='submit' style={{width:'100px',height:'50px',marginLeft:'550px',marginTop:'20px'}}>NEXT</button></Link>
                </div>
                
       
        </section>
    );
}

