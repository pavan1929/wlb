var userDetails = require('./users');
var connection = require("../utilities/connections")

var userDAL = {}



userDAL.checkUser = function (contactNo) {
    return connection.getUserCollection().then(function (collection) {
        return collection.findOne({ "contactNo": contactNo }).then(function (customerContact) {
            if (customerContact) {
                return new userDetails(customerContact);
            }
            else return null;
        })
    })
}

userDAL.getPassword = function (contactNo) {
    return connection.getUserCollection().then(function (collection) {
        return collection.find({ "contactNo": contactNo }, { _id: 0, password: 1 }).then(function (password) {
            if (password.length != 0)
                return password[0].password;
            else
                return null;
        })
    })

}



module.exports = userDAL
