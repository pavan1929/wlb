var userDB = require('../model/userslogin');


var userBL = {}


//login a user
userBL.login = function (contactNo,userPassword) {
    return userDB.checkUser(contactNo).then(function (user) {
       if(user==null){
           let err= new Error("Enter registered contact number! If not registered, please register")
            err.status = 404
            throw err
        }
       else{
           return userDB.getPassword(contactNo).then(function(password){
               if(password!=userPassword){
                    let err =  new Error("Incorrect password")
                    err.status = 406
                    throw err
               }
               else{
                   return user;
               }
           })
       }
    })
}


module.exports = userBL
