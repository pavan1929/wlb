var express = require('express');
var router = express.Router();
const setupUser = require("../model/setupUser")
var userservice = require('../service/userslogin')

router.get("/setup", (req, res, next) => {
    setupUser.userSetup().then((data) => {
        res.send(data)
    }).catch((err) => {
        next(err)
    })
})

router.post('/register', function (req, res, next) {
    //implement post method to register a new user.
})

//router to login
router.post('/login', function (req, res, next) {
    var contactNo = req.body.contactNo;
    var password = req.body.password;
    userservice.login(parseInt(contactNo), password).then(function (userDetails) {
        res.json(userDetails);
    }).catch(function (err) {
        next(err);
    })
})

router.get('/getBookings/:userId', function (req, res, next) {
    //implement get method
})




module.exports = router;

