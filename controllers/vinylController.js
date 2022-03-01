const express = require('express');
const router = express.Router();

const Vinyl = require('../models/vinylSchema.js');

router.get('/', async(req,res)=>{
    const vinyls = await Vinyl.find({});
})


module.exports = router;