const express = require('express');
const app = express();
var dt=Date.now()

const checkTime = (req, res, next) => {
    console.log('Time:',dt);
    next();
}
app.use(checkTime)
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/home.html')
})
app.get('/contact', (req, res)=>{
    res.sendFile(__dirname + '/views/Contactus.html')
})
app.get('/services', (req, res)=>{
    res.sendFile(__dirname + '/views/OurServices.html')
})
app.use(express.static('views/css'))
app.listen(5000,() => {console.log("server is running");});