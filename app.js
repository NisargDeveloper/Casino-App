const express = require("express");
const app = express();
const port = 8080;


const hostname = "192.168.2.147"
app.use(express.static('public'));
app.get("/", function(req,res) {
  res.send("Hello World");
})

app.get('/index.html', function(req,res) {
  console.log("Going in")
  res.sendFile( __dirname + "/" + "index.html");
})


app.listen(port, hostname, function() {
  console.log(`Example app listening on port ${port} and hostname ${hostname}`);
})