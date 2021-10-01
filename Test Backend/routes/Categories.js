const express = require('express');
const Category = require('../models/Category');


//route middleware
const router = express.Router();

// save item

router.post('/category/save',(req,res)=>{
    let newCategory = new Category(req.body);
    newCategory.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"Category Saved successfully"
        });
    });
});

// get item

router.get('/category',(req,res) => {
    Category.find().exec((err,Category) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingCategory:Category
        });
    });
});

//get a specific category

router.get("/category/specific/:id",(req,res) =>{
    let postId = req.params.id;

    Category.findById(postId,(err,post)=>{
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
router.put('/category/update/:id',(req,res)=>{
    Category.findByIdAndUpdate(
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

router.delete('/category/delete/:id',(req,res) =>{
    Category.findByIdAndRemove(req.params.id).exec((err,deletedCategory) =>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccesful",err
        });
        return res.json({
            message:"Delete Succesfull",deletedCategory
        });
    });
});

module.exports = router;
