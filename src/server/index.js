import express from "express";

const app = express();

//app.get('*', (req, res) => res.send('Hello World!'));
app.get('/', function (req,res, next){
    console.log('first funct');
    next();
}, function(req, res){
    console.log('2nd funct');
    res.send('hello');
});
app.listen(8000, () => console.log('Listening on port 8000!'));