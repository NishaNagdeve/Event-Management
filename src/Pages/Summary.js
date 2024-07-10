import React, { useEffect, useState } from 'react';
import '../Styles/Summary.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function Summary() {
    const [weddingData, setWeddingData] = useState(null);
    const [selectedHall, setSelectedHall] = useState('');
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const storedData = sessionStorage.getItem('weddingData');
        const storedHall = sessionStorage.getItem('selectedHall');
        const storedPrice = Number(sessionStorage.getItem('selectedPrice')); // Convert to number

        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setWeddingData(parsedData);
        }

        if (storedHall) {
            setSelectedHall(storedHall);
        }

        if (storedPrice) {
            setSelectedPrice(storedPrice);
        }
    }, []);

    useEffect(() => {
        const storedPrice = Number(sessionStorage.getItem('totalPrice')); // Convert to number
        if (storedPrice) {
            setTotalPrice(storedPrice);
        }
    }, []);
    const total = selectedPrice + totalPrice;  
    const handleSubmit=async(e)=>
    {
        e.preventDefault();
        if (!weddingData) {
            console.error('No wedding data available.');
            return;
        }

        const { nameOfEvent, destination, date } = weddingData;
       try{
        const response=await axios.post('http://localhost:3000/summary',{
               nameOfEvent,
               destination,
               date,
               selectedHall,
               totalPrice,
               total
        });
    }
    catch(error)
    {
        console.log(error);
    }
    } 
    return (
        <div className="container1"> 
        {/* Apply the container class */}
        <form onSubmit={handleSubmit}>
            {weddingData && (
                <div className="summary-box"> {/* Apply the summary-box class */}
                    <h1 className="heading">Event Booking Summary</h1> {/* Apply the heading class */}
                    <div className="info-container">
    <p><strong>Name of Event:</strong> {weddingData.nameOfEvent}</p>
    <p><strong>Destination:</strong> {weddingData.destination}</p>
    <p><strong>Date:</strong> {weddingData.date}</p>
    <p><strong>Selected Theme:</strong> {selectedHall}</p>
    <p><strong>Hall Price:</strong> {selectedPrice} Rs.</p>
    <p><strong>Food Price:</strong> {totalPrice} Rs</p>
    <p><strong>Your Total Bill:</strong> {total} Rs.</p>
    <button>Done</button>
</div>
                </div>
            )}
            </form>
        </div>
    );
}
