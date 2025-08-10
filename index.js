// const express=require("express");
// const port =3000;
// const app=express();
// app.set("view engine","ejs");
// app.listen(port,()=>{
//     console.log("listened just now");
// });

// app.get("/ig/:username",(req,res)=>{
//     let {username}=req.params;
//     const instaData=require("./cat.json");
//     const data=instaData[username];
//     res.render("instagram.ejs",{data});
// });

// const express=require("express");
// const app=express();
// const port=3000;

// app.listen(port,()=>{
//     console.log("listened your request");
// });

// app.get("/rolldice",(req,res)=>{
//     let diceroll=Math.floor(Math.random()*6)+1;
//     res.render("rollDice.ejs",{diceroll});
// })




const express=require("express");
const app=express();
const port=3000;

app.set("view engine","ejs");

app.listen(port,()=>{
    console.log("just listened");
});

app.get("/ig/:username",(req,res)=>{
    let {username}=req.params;
    const instaData=require("./cat.json");
    let data=instaData[username];
    if(data){
        res.render("instagram.ejs",{data});
    }
    else{
        res.render("existn.ejs");
    }
    
})