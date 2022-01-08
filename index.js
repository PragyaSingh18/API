const http=require('http');
const fs=require('fs');
//api only have to load once due to this code...
fs.readFile("userApi.json","UTF-8");
const objData=JSON.parse(data);


const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Hello....How r U  ????")
    }else if(req.url=="/about"){
        res.end("<h1>About Pragya....</h1>")
    
    }else if(req.url=="/userapi"){
        //we have to tell the server/browser which type of data is this...
        res.writeHead(200,{"Content-type":"application/json"})
//here we r only getting data.....not reading or loading....
res.end(objData[0].name)

}else {
        res.writeHead(404,{"Content-type":"text/html"})
        res.end("<h1>Page not Found</h1>")
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("Port is 8000");
})