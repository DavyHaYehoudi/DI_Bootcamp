const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send('<h1> This an HTML tag </h1>')
})

app.listen(3000);