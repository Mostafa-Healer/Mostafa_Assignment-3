// POST

const http = require("node:http");
const path = require("node:path");
const fs = require("node:fs");
let port = 3000 ;

const filePath = path.resolve("./postFile.json");
const readData = fs.readFileSync(filePath,{encoding:"utf-8"}); // read file as string
const users = JSON.parse(readData); // from string to object



    const server = http.createServer((req,res)=>{
        const {url , method} = req ;
    

if (url == "/sign" && method == "POST"){

        let body = "" ; // Create Var to store Data from body of postman

        req.on("data",(chunk)=>{ // Recieve Data from 
            body += chunk ;
        });

        req.on("end" , ()=>{
            body = JSON.parse(body);
            const {email} = body ;

            const user = users.find((value)=>{
                return email === value.email ;
            });

            if( user ){
                res.writeHead( 404 , {"content-type" : "text/plain"});
                res.write("Email already exists");
                res.end();
                console.log("Email already exists");
                return ;
            };
            users.push(body); 
            fs.writeFileSync(filePath , JSON.stringify(users));
            res.writeHead( 201 , {"content-type" : "applicatio/json"});
            res.write(JSON.stringify(users));
            res.end();
                console.log("user already successfully");
        });
    }

    });



    server.listen(port , ()=>{
    console.log("Server is Running on Port " + port);
});

server.on("error" , (err)=>{
    
    if(err.code = "EADDRINUSE"){
        port ++;
        server.listen(port);
    }
});