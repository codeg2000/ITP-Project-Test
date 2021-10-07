const express = require('express');
const post = require('../models/EmpLeave');

const router = express.Router();

//Save Post

router.post('/post/create',(req,res) => {

    let newPost = new post(req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Post saved successfully !!! "
        });
    });
});

//Get post

router.get('/post',(req,res)=>{
    post.find().exec((err,post)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:post
        });
    });
});

// get a specific post

router.get('/post/specific/:id',(req,res)=>{
    let postId = req.params.id;

    post.findById(postId,(err,post) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            post 
        });

    });
});

//update posts

router.put('/post/update/:id',(req,res)=>{
    post.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"updated successfully"
            });
        }
    );
});

// delete post

router.delete('/post/delete/:id',(req,res)=>{
    post.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete successfull",deletedPost
        });
    });
});

module.exports = router;