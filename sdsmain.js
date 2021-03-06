///
/// Stef's NodeJS Webserver for Docker & Kubernetes experiments
///
var myip = require('ip');
var myos = require('os');
var mycounter = require("./sdsmodules.js");
var http = require('http');
const hostname = '0.0.0.0';
// const port = 8088;
//const hostname = '127.0.0.1';
const port = 3000;

//const args = process.argv.slice(2);

const server = http.createServer((req, res) => {
  var vcounter =  mycounter.getcounter();
  /// 
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<b>** Sample NodeJS Web Application **</b><br>");
  res.write("<b>**   New Tech In Action -- 2020  **</b><br><br>");
  res.write("      Node Name: " + myos.hostname +  "<br>");
  res.write("   Node Address: " + myip.address() + " port: "+ server.address().port + "<br>");
  res.write("Storage Counter: " + vcounter + "<br>");
  res.write("    Time is now: " + Date().toString()+ "<br>");
  var urldata = req.url;   
  if (urldata == "/exit") { 
    res.write("*** webserver stopped ***<br>");
    console.log("*** webserver stopped ***");
    res.end(); 
    process.exit();
  }
  res.write("URL data: " + urldata);
  res.end(); 
});

server.listen(port, hostname, () => {
  console.log("Server " + hostname.toString() + " listing on port " + port.toString() );
});

var callback = function (err, data) {
  if (err) return console.error(err);
  console.log(data);
};