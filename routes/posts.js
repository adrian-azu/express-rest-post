const express = require('express');
const router = express.Router();
const Posts = require('../models/Posts.js');
router.get('/',(req, res)=>{
    res.send('We are on posts');
})

router.post('/', async(req,res)=>{
    console.log(req.body)
    // const { title, description } = req.body;
    
    // const post = new Posts({
    //     title: title,
    //     description: description
    // })
    // try {
    //     await post.save()

    // } catch (error) {
        
    // }
})

module.exports = router;