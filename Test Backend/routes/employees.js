const express = require('express');
const employee = require('../models/employee');

const router = express.Router();

//save employee 

router.post('/employee/add',(req,res) => {

    let newEmployee = new employee(req.body);

    newEmployee.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Employee saved successfully !!! "
        });
    });
});

//Get post

router.get('/employee',(req,res)=>{
    employee.find().exec((err,employee)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:employee
        });
    });
});

//get a specific post

router.get('/employee/emp/:id',(req,res)=>{
    let postId = req.params.id;

    employee.findById(postId,(err,post) =>{
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

router.put('/employee/update/:id',(req,res)=>{
    employee.findByIdAndUpdate(
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

router.delete('/employee/delete/:id',(req,res)=>{
    employee.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{

        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"Delete successfull",deletedPost
        });
    });
});



module.exports = router;
