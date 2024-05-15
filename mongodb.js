const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
app.use(express.json()); // Add express.json() middleware to parse JSON data
app.use(cors());

const uri = "mongodb://localhost:27017/Event"; // Update with your MongoDB connection URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect()
    .then(() => {
        console.log('Connected to MongoDB');

        // Define your Express route to handle incoming data
        app.post('/summary', async (req, res) => { // Change the route to '/summary'
            const { weddingData, selectedHall, selectedPrice, totalPrice } = req.body;

            try {
                const db = client.db('Event'); // Replace with your actual database name
                const collection = db.collection('Entry'); // Define your collection

                // Insert the data into the collection
                await collection.insertOne({
                    weddingData,
                    selectedHall,
                    selectedPrice,
                    totalPrice
                });

                res.status(200).json({ message: 'Data inserted successfully' });
            } catch (error) {
                console.error('Error inserting data:', error);
                res.status(500).json({ error: 'An error occurred' });
            }
        });

        // Start the server
        const port = 8001; // Choose your desired port
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });
