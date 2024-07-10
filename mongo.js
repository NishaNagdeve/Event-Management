// Server-side code (server.js)
const express = require("express");
const mongoose=require('mongoose');
const { MongoClient } = require("mongodb");
const bodyParser = require('body-parser');


const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const uri = "mongodb://localhost:27017/Event"; // MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect()
    .then(() => {
        const db = client.db("Event"); // Replace "your_database_name" with your actual database name

        app.get("/", cors(), (req, res) => {});

        app.post("/", async (req, res) => {
            const { email, password } = req.body;

            try {
                const check = await db.collection("users").findOne({ email: email });

                if (check) {
                    res.json("exist");
                } else {
                    res.json("notexist");
                }
            } catch (e) {
                res.json("fail");
            }
        });

        app.post("/signup", async (req, res) => {
            const { email, password } = req.body;
            const data = {
                email: email,
                password: password
            };

            try {
                const check = await db.collection("users").findOne({ email: email });

                if (check) {
                    res.json("exist");
                } else {
                    res.json("notexist");
                    await db.collection("users").insertOne(data);
                }
            } catch (e) {
                res.json("fail");
            }
        });
       const userSchema=new mongoose.Schema({
        nameOfEvent:String,
        destination:String,
        date:String,
        selectedHall:String,
        totalPrice:String,
        total:String
       })
       const Summary=mongoose.model('Summary',userSchema);

       app.post('/summary',async(req,res)=>{
            const{nameOfEvent,destination,date,selectedHall,totalPrice,total}=req.body;
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
     
        app.listen(3000, () => {
            console.log("port connected");
        });
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });
   

