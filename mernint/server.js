const http= require('http')
const hostname='127.0.0.1'
const port=3000;
var count=0;
const requestlistener=function(req,res){
    res.statuscode=200;
    res.setHeader('metricconversion')
    console.log('client connected')
    count++;
    res.end("client no:"+count);
}
const server=http.createServer(requestlistner);
server.listen(port,hostname);