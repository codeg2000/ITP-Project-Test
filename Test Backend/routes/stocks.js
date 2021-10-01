const { request } = require('express');
const express = require('express');
const stocks = require('../models/stocks');


const router = express.Router();

//add stocks

router.post('/stock/add',(req,res)=>{

    let newStock = new stocks(req.body);

    newStock.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Stock added Successfully."
        });
    });

});

//get stocks

router.get('/stocks',(req,res) =>{
    stocks.find().exec((err,stocks) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingStocks:stocks
        });
    });
});

//get a specific stock

router.get("/stock/:id",(req,res) =>{

    let stockId =req.params.id;

    stocks.findById(stockId,(err,stock) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            stock
        });
    });
});

//update stocks

router.put('/stock/update/:id',(req,res)=>{
    stocks.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,stock)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Stock Updated Successfully."
            });
        }
    );
});

//delete stock

router.delete('/stock/delete/:id',(req,res) =>{
    stocks.findByIdAndRemove(req.params.id).exec((err,deletedStock) =>{
        
        if(err)return res.status(400).json({
            message:"Delete Unsuccessful",err
        });
            
        return res.json({
            message:"Delete Successful",deletedStock
        });
    });
});

module.exports = router