const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomListSchema = new Schema({

    roomID: number,
    roomName: string,
    roomLocation: string,
    roomPrice: number,
    roomCheckIn: number,
    roomCheckOut: number,
    roomRating: number,
    imageURL: string
});



const RoomList = mongoose.model('room_list', roomListSchema);

module.exports = { RoomList };