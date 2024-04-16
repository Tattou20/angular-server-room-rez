const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomListSchema = new Schema({

roomID: Number,
roomName: {
 type:String,
 required:true,
 },
roomLocation: String,
roomPrice: {
 type:Number,
 required:true,
},
roomCheckIn: Date,
roomCheckOut: Date,
roomRating:Number,
imageURL: String
});

const RoomList = mongoose.model('rooms', roomListSchema);

module.exports = { RoomList };