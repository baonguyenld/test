const express = require("express");
const route = express.Router();
const AccountModel = require("../models/Accounts")
route.post("/login",(req,res) =>{
    AccountModel.findOne(
        {
        username:req.body.u,
        password:req.body.p
    }
    )
    .then( data =>{
        if(data){ 
            return res.json(true)
        }else
            return res.json(false)

    })
    .catch(err =>{
        res.json("error");
    })

})
module.exports = route;