const express = require("express");
const request = require("request");
const app = express();

const bp = require("body-parser");

const { urlencoded } = require("body-parser");

app.set("view engine","ejs");

app.get("/numbers/prime",function(req,res){

var options = { method: 'GET',
  url: 'http://104.211.219.98/numbers/primes',
  headers:  { 'User-Agent': 'Awesome-Octocat-App', 'Content-Type': 'application/json' } };

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {}
    res.render("prime",{ body : body});
});
})

app.get("/numbers/fibo",function(req,res){

    var options = { method: 'GET',
      url: 'http://104.211.219.98/numbers/fibo',
      headers:  { 'User-Agent': 'Awesome-Octocat-App', 'Content-Type': 'application/json' } };
    
    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {}
        res.render("fibo",{ body : body});
    });
})

app.get("/numbers/odd",function(req,res){

    var options = { method: 'GET',
      url: 'http://104.211.219.98/numbers/odd',
      headers:  { 'User-Agent': 'Awesome-Octocat-App', 'Content-Type': 'application/json' } };
    
    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {}
        res.render("odd",{ body : body});
    });
    })

    app.get("/numbers/rand",function(req,res){

        var options = { method: 'GET',
          url: 'http://104.211.219.98/numbers/rand',
          headers:  { 'User-Agent': 'Awesome-Octocat-App', 'Content-Type': 'application/json' } };
        
        request(options, function (error, response, body) {
          if (!error && response.statusCode == 200) {}
            res.render("rand",{ body : body});
        });
        })
        
        
app.listen(3000,function(){
    console.log("Server Running succesfully Localhost:3000")
})