const express=require('express');
const app=express();
const port=8000;
const cors=require('cors');
const db=require('./config/mongoose');
app.use(express.urlencoded());
app.use(cors());
app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){
        console.log("error in opening the server");
        return;
    }
    console.log("server running on port",port);
})