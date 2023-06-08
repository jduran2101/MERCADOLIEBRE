const express = require('express');
const app = express();
const path = require('path') 
app.listen(3030,()=> console.log('Corriendo, link http://localhost:3030'));
let htmlpath = path.join(__dirname, './views/home.html')
app.get('/',(req,res)=>{
    res.sendFile(htmlpath)
});
let loginpath = path.join(__dirname, './views/login.html')
app.get('/login',(req,res)=>{
    res.sendFile(loginpath)
});
app.use(express.static('public'));