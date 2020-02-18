var express = require('express');
var router = express.Router();
var packageBL = require('../service/userpackages')

router.get('/hotDeals', function(request,response,next) {
    //implement get method to get all the hot deals
});


router.get('/destinations/:keyword', function(request,response,next) {
    //implement get method to get all the packages based on the keyword
});

module.exports = router