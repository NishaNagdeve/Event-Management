const express = require('express');
const mongoose=require('mongoose');
const cors = require('cors');
const bodyParser=require('body-parser');

const app = express();
app.use(bodyParser.json()); 
app.use(cors());
mongoose.connect('mongodb://localhost:27017/Event',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  });
  const userSchema=new mongoose.Schema({
    nameOfEvent:String,
    destination:String,
    date:String,
    selectedHall:String,
    totalPrice: Number, 
    total: Number 
  });
  const Summary=mongoose.model('Summary',userSchema);
  app.post('/summary',async(req,res)=>{
    const {nameOfEvent,destination,date,selectedHall,totalPrice,total}=req.body;
    const newuser=new Summary({nameOfEvent,destination,date,selectedHall,totalPrice,total});
  
    try
    {
      await newuser.save();
      res.status(201).send('User saved');
    }
    catch (error) {
      res.status(500).send('Error saving user');
    }
  });
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });