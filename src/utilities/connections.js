const { Schema } = require("mongoose");
var Mongoose = require("mongoose")
Mongoose.Promise = global.Promise;
var url = "mongodb://localhost:27017/Wanderlust_DB";


var userSchema = Schema({
    name: String,
    userId: String,
    emailId: String,
    contactNo: Number,
    password: String,
    bookings: [String]
}, { collection: "User" })


var collection = {};

collection.getUserCollection = () => {
    return Mongoose.connect(url, { useUnifiedTopology:true,useNewUrlParser: true }).then((database) => {
        return database.model('User', userSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}

collection.getBookingsCollection = () =>{

}

collection.getDestinationsCollection = () =>{
    
}

collection.getHotdealsCollection = () =>{
    
}
module.exports = collection;
