const path = require("node:path");
const fs = require("node:fs");
const Event = require("node:events");
const zlib = require("node:zlib");


//#region (1)
function fnReadable(){
    const filepath = path.resolve("./big.txt");

    let ReadStream =fs.createReadStream(filepath,{
        encoding:"utf-8"
    });

    ReadStream.on("data",(chunk)=>{
        console.log("Stream ( 1 )");
        console.log(chunk);
    });
}
fnReadable();
//#endregion


//#region (2)
function CopyFile(){
    const Filepath1 = path.resolve("./Source.txt") ;
    const Filepath2 = path.resolve("./dist.txt") ;

    const ReadStream = fs.createReadStream(Filepath1,{encoding:"utf-8"});
    const WriteStream = fs.createWriteStream(Filepath2,{encoding:"utf-8"});

    ReadStream.on("data",(chunk)=>{
        WriteStream.write(chunk);
        console.log("Stream ( 2 )");
        
        console.log("File copied using streams");
    });
};
CopyFile();
//#endregion


//#region (3)
function Pipe(){
    const source = path.resolve("./data.txt") ;
    const dispath = path.resolve("./data.txt.gz");
    // const dispath = path.resolve("./data.txt.gz");

    const ReadStream = fs.createReadStream(source,{encoding:"utf-8"});
    const WriteStream = fs.createWriteStream(dispath,{encoding:"utf-8"});

    ReadStream.pipe(zlib.createGzip()).pipe(WriteStream);    
}
Pipe();
//#endregion


// #region (4)

//#endregion


// #region (5)


// #endregion



// #region (6)

// #endregion


// #region (7)

// #endregion


// #region (8)

// #endregion


// #region (9)


// #endregion



// #region (10)

// #endregion



// #region (11)


// #endregion



// #region (12)

// #endregion



// #region (13)

// #endregion



// #region (14)


// #endregion



// #region (15)

// #endregion




// #region (16)


// #endregion




// #region (17)


// #endregion





