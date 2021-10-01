const express = require('express');
const item = require('../models/item');

//route middleware
const router = express.Router();

// save item

router.post('/item/save',(req,res)=>{
    let newItem = new item(req.body);
    newItem.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"Item Saved successfully"
        });
    });
});

// get item

router.get('/item',(req,res) => {
    item.find().exec((err,item) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingItems:item
        });
    });
});

//get a specific item

router.get("/item/:id",(req,res) =>{
    let postId = req.params.id;

    item.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});    
        }

        return res.status(200).json({
            success:true,
            post
        });
    });
});

//update item
router.put('/item/update/:id',(req,res)=>{
    item.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Update Succesfully"
            });
        }
    );
});

//delete item

router.delete('/item/delete/:id',(req,res) =>{
    item.findByIdAndRemove(req.params.id).exec((err,deletedItem) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });
        return res.json({
            message:"Delete Succesfull",deletedItem
        });
    });
});

module.exports = router;



