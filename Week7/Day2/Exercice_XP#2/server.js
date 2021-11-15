const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors())

const user = {
    firstname: 'John',
    lastname: 'Doe'
}


app.get('/user', (req,res)=>{
    console.log('Amichai');
    res.json(user) 
    // res.send(JSON.stringify(user))
})
//-----------------------------------------------------------------------------
//Exercice2
app.get('/user/:id', (req,res)=>{
    let id = req.params.id;
    console.log(id);
    res.json(id) 
    // res.send(JSON.stringify(user))
})

//------------------------------------------------------------------------------
app.use(express.static('public'));
// app.use('/',exp.static(__dirname+'/public'));

app.listen(3000)
