const express = require('express');
const member = require('../models/member');

const router = express.Router();

//save posts

router.post('/member/add',(req,res)=>{

    let newMember = new member(req.body);

    newMember.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });
});


//get posts

router.get('/member',(req,res)=>{
    member.find().exec((err,member)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:member
        });
    });
});

//update posts

router.put('/member/update/:id',(req,res)=>{
    member.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated Succesfully"
            });
        }
    );
});

//delete post

router.delete('/member/delete/:id',(req,res)=>{
    member.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{

        if(err)return res.status(400).json({
            message:"Delete unsuccesful",err
        });
        return res.json({
            message:"Delete Succesfull",deletedPost
        });
    });
});

//get a specific post

router.get('/member/post/:id',(req,res)=>{
    let postId = req.params.id;
    member.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});


module.exports = router;

