/**
 * This file is to connect to DB and execute queries
 */

import mongoose from 'mongoose';
import Student from './models/student_model.js';


//if db not present, it will create one
mongoose.connect('mongodb://localhost/xyz',()=>{
    console.log('mongo db connected');
},err=>{
    console.log('error :',err);
})


async function dbOperation(){
   try{
    const student = await Student.create({
        name : 'Neymar',
        age : 25,
        email : 'neymar121@gmail.com',
        subject : ['breaking', 'killing'],
        address : {
            lane1 : 'l1',
            lane2 : 'l2',
            street : '1st street',
            city : 'erode',
            country : 'india'
        }
    }) 
    console.log(student);
   } catch(err){
     console.log(err);
   }
}

dbOperation();
