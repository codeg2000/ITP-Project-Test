const mongoose = require ("mongoose");

const EmployeeSchema = new mongoose.Schema({
//const EmployeeSchema = new Schema({ 
    
    clas : {
        type : Number,
        required : true,
    },

    name : {
        type : String,
        required : true,
    },

    basicPay : {
        type : Number,
        required : true,
    },

    salary : {
        type : Number,
        required : true,
    },

    travelAllowance : {
        type : Number,
        required : true,
    
    },

    medicalAllowance : {
        type : Number,
        required : true,
    
    },

    bankAccountNo : {
        type : Number,
        required : true,
    
    }

});

const Pemployee = mongoose.model("PayEmployee",EmployeeSchema);

module.exports = Pemployee ; 