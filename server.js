const mongoose = require("mongoose");
const express = require('express');
require("dotenv").config({path:"./.env"})
const RestaurantDB = require('./model/model')
const connectDB = require('./config/connectDB')


//Add new Plat
// const Plat = new RestaurantDB({name:"plat tunisien",price:5})
// Plat.save( (err)=>{
//     if(err) return handleError(err)
//     //saved
// } )
// Find All plats
const search = async()=>{
    try {
       const data = await RestaurantDB.find({});
         console.log(data)
    } catch (error) {
        console.log(error)
    }
}
// search()

//FindOne plat
const searchOneEL = async()=>{
    const query1 = "62336171deb24cd3a3221058";
    const query2 = "pizza"
    try {
       const data = await RestaurantDB.findOne({name:query2});
         console.log(data)
    } catch (error) {
        console.log(error)
    }
}
// searchOneEL()

//Update Plat

const query = {name:"kaftaji"};

const Update = async()=>{
    const data = await RestaurantDB.findOneAndUpdate(query,{$set:{name:"pizza",price:12}},(err,data)=>{
        try {
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }).clone()
}
// Update()
//Delete Plat
const delQuery = {_id:"62336171deb24cd3a3221058"}
const Delete = async()=>{
    const DelPlat = await RestaurantDB.findOneAndDelete(delQuery,(data,err)=>{
        try {
            console.log("removing Data",data)
        } catch (error) {
            console.log(error)
        }
    }).clone()
}

Delete();

connectDB();

const app = express();

const PORT = process.env.PORT || 4000 ;

app.listen(PORT,(err)=>{
    err ? console.log(err)
    :console.log(`server is running on port ${PORT}`)
})