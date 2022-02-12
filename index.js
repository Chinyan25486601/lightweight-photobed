const express = require("express");
const path = require("path")

const app = express();
const PORT = 14516;

app.use(express.static(path.join(__dirname+"./../")));

app.listen(PORT, ()=>{
    console.log(`server is listening at port ${PORT}`);
})