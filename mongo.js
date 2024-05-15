// Server-side code (server.js)
const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");
const app = express();
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
        app.listen(8000, () => {
            console.log("port connected");
        });
    })
    .catch(err => {
        console.error("Error connecting to MongoDB:", err);
    });

