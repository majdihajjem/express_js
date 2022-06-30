const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views','./pages');
const checkTime = (req, res, next) => {
    var d=new Date().getDay()
    var h=new Date().getHours()
    if((h >= 9 && h<18) && (d > 0 && d <6)){
        next();
    }else{
        res.send("not found")
    }
}
app.use(checkTime)
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/views/home.html')
    // res.render('home');
})
app.get('/contact', (req, res)=>{
    res.sendFile(__dirname + '/views/Contactus.html')
})
app.get('/services', (req, res)=>{
    res.sendFile(__dirname + '/views/OurServices.html')
})
app.use(express.static('views/css'))
app.listen(5000,() => {console.log("server is running");});