// The following are transcriptions of the code used within the first practical

/* var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world')
})

// list to a particular port
app.listen(3000)

const express= require("express");
const res = require("express/lib/response")
const app= express();
const addTwoNumber= (n1,n2) => {
    return n1+n2
}
app.get("/addTwoNumber", (req,res)=>{
    const n1= parseInt(req.query.n1);
    const n2= parseInt(req.query.n2);
    const result = addTwoNumber(n1,n2);
    res.json({statuscode:200, data: results });
});
console.log (addTwoNumber(19,12));
const port=3040
app.listen(port, ()=> {
    console.log("hello i'm listening to port"+port);

})


// The following were the first exercises within week one practical one:

var async = function () {
    setTimeout(function () { log("I am coming out later although I have been called before the next one")}, 2000)
}

var adder=function(first,second){
    var sum=first+second
    return sum
}

var log=function(msg){
    console.log("[Log] :",msg)
}

log("hello world")
log("welcome to SIT323/737")
log("The sum is "+adder(5,6))
async();   
log("This is going to come out before the previous one")

console.log("Week-1 ")
*/
