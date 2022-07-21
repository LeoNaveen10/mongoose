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
    // await Student.collection.drop();
    // await Student.create({
    //     name : 'Neymar',
    //     age : 25,
    //     email : 'neymar121@gmail.com',
    //     subject : ['maths'],
    //     address : {
    //         lane1 : 'l1',
    //         lane2 : 'l2',
    //         street : '1st street',
    //         city : 'erode',
    //         country : 'india'
    //     }
    // })
    // await Student.create({
    //     name : 'messi',
    //     age : 35,
    //     email : 'messi121@gmail.com',
    //     subject : ['chemistry'],
    //     address : {
    //         lane1 : 'l1',
    //         lane2 : 'l2',
    //         street : '1st street',
    //         city : 'erode',
    //         country : 'india'
    //     }
    // })
    // await Student.create({
    //     name : 'ronaldo',
    //     age : 37,
    //     email : 'ronaldo121@gmail.com',
    //     subject : ['chemistry'],
    //     address : {
    //         lane1 : 'l1',
    //         lane2 : 'l2',
    //         street : '1st street',
    //         city : 'erode',
    //         country : 'india'
    //     }
    // })
    // await Student.create({
    //     name : 'hazard',
    //     age : 29,
    //     email : 'hazard121@gmail.com',
    //     subject : ['physiscs'],
    //     address : {
    //         lane1 : 'l1',
    //         lane2 : 'l2',
    //         street : '1st street',
    //         city : 'erode',
    //         country : 'india'
    //     }
    // })
    // await Student.create({
    //     name : 'ibrahimovic',
    //     age : 40,
    //     email : 'ibra121@gmail.com',
    //     subject : ['science'],
    //     address : {
    //         lane1 : 'l1',
    //         lane2 : 'l2',
    //         street : '1st street',
    //         city : 'erode',
    //         country : 'india'
    //     }
    // })

    // const stud = await Student.findById('62d900cb192c066beec7b932');
    // console.log(stud);
    // const std = await Student.find({name : 'ronaldo'})
    // console.log(std);
    

    /**
     * delteOne({condition})
     * delete({condition})
    */
    // await Student.deleteOne({name : 'ronaldo'})


    /**
     * where clause
     */
     const count = await Student.where('age').lt(35).count();
    const value = await Student.where('age').lt(35);
    const andClause = await Student.where('age').lt(35).where('name').equals('Neymar');
    console.log(value,count);
    console.log(andClause);
} catch(err){
     console.log(err);
   }
}

dbOperation();
