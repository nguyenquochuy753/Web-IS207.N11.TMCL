const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require("./routes/userRouter");
const url = "mongodb+srv://20521404:Huygalaso1@cluster0.d2orazb.mongodb.net/abUserManagerPolyDN?retryWrites=true&w=majority"
const app =express();
app.use(cors());
app.use(express.json());
mongoose.connect(url,{useUnifiedTopology:true, useNewUrlParser:true})
.then(console.log("DB connected"));
app.use(userRouter);
app.listen(3000,()=>{
    console.log('server is running');
})

