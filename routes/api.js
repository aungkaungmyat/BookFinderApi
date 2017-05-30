const express = require('express');

//set up express route
const router = express.Router();

//get data from db
router.get('/',function(req,res){
  res.send("Data that we want to return");
})

//export router
module.exports = router;
