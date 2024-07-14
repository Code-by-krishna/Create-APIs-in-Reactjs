const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());

app.get("/user",(req,res) => {
    res.send("Amit Saini");
    console.log(req);
})

app.post("/users",(req,res) => {
    console.log(req.body);
   if(req.body) {
    res.send("data receive successfully");
   }
})



app.listen(3000,() => {
    console.log("Server is Runing")
})