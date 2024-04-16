const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { connect } = require("./DataBase.js");
const DB_NAME = process.env.DB_NAME;
const { RoomList } = require("./utils/models/roomList.js");


const port = 3000;

let client;
connect().then((connectedClient) => {
    client = connectedClient;
    console.log("Connected to MongoDB");
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1); 
});

app.get("/room-list", async (req, res) => {
    const query = {};
    let roomList = await
        client.db(DB_NAME).collection("room_list").find(query).toArray();
    res.send(roomList);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});