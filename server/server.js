import express from 'express';
import { promises as fs } from 'fs';
import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_DB_COLLECTION;
const ordersCollection = process.env.MONGO_DB_ORDERS;

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies
const PORT = 3000;

app.get('/', async (req, res) => {
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const games = await collection.find({}).toArray();
        res.json(games);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Game over! ☹");
    }
});

app.get("/cat/:category", async (req, res) => {
    try {
        const {category} = req.params;
        console.log("Category:",category)
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const games = await collection.find({"product_information.genre": `${category}`}).toArray();
        res.json(games);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Game over! ☹");
    }

});

app.post("/search", async (req, res) => {
    try {
        const {searchTerm} = req.body;
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const regex = new RegExp(searchTerm, 'i');
        const games = await collection.find({"game_title": regex}).toArray();
        res.json(games);
    } catch (err) {
        console.error("Error: ", err);
        res.status(500).send("Game over! ☹");
    }
});

app.post("/order", async (req, res) => {
    try {
        const order = req.body;
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(ordersCollection);
    const result = await collection.insertOne(order);
    res.status(201).send(`{"_id":"${result.insertedId}"}`);
    } catch (err) {
        console.error("Error: ", err);
        res.status(500).send("Game over! ☹");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});