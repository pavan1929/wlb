var express = require('express');
var router = express.Router();
//import neccessary modules


router.post('/:userId/:destinationId',function(request,response,next){
    //implement post method
});

router.delete('/cancelBooking/:bookingId',function(request,response,next){
    //implement delete method 
})

router.get('/getDetails/:destinationId',function(request,response,next){
    //implement get method

})

module.exports=router;