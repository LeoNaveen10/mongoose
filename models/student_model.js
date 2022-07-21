import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    lane1 : String,
    lane2 : String,
    street : String,
    City : String,
    country : String
})

const studentSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
     },
    age : {
        type : Number,
        min : 16
    },
    email : {
        type : String,
        requrired : true,
        unique  : true, //not working for new update, have to write custom validator
        minLength : 10,
        lowercase : true
    },
    createdAt : {
        type : Date,
        immutable : true, //only for the first time it will get stored
        default : ()=>{
            return Date.now();}
    },
    updatedAt : {
        type : Date,
        immutable : false,
        default : ()=>{
            return Date.now();
        }
    },
    subject : {
        type : [String],
        //custom validation
        validate : {
            validator : s => s.length !=0,
            message : props => 'subject list can"t be empty'
        }
    },
    address : addressSchema //Embedded document
})

const Student= mongoose.model('Student',studentSchema);
export default Student;