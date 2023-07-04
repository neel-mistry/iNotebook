const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/inotebook'

const connectToMongo = () =>{
    mongoose.connect(mongoURI)
    if (mongoose.connect(mongoURI)) {
        console.log("Connected")
    }
}

module.exports = connectToMongo;