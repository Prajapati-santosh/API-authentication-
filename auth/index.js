import express from "express";


const app=express();

app.get("/",(req,res)=>{
    res.send("Hello");
})

app.listen(process.env.PORT,()=>{
    console.log(process.env.USERNAME);
    console.log(`listening on ${process.env.PORT}`);
})