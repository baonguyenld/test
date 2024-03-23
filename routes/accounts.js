const express = require("express");
const route = express.Router();
const AccountModel = require("../models/Accounts")
route.get("/login",(req,res) =>{
    const userName = req.body.u;
    const passWord = req.body.p;
    AccountModel.findOne({
        userName:userName,
        password:passWord
    })
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