const fs=require('fs')
//Async file creation
fs.writeFile("read.txt","Hello Pragya...How are You....I hope you are doing Good...",(err)=>{
})

fs.appendFile("read.txt","I Miss U ):",(err)=>{
    console.log("haha")
})

const rest=fs.readFile("read.txt","utf-8",(err,rest)=>{
console.log(rest)
console.log("Hellloooooo")
})

//Sync file creation
fs.writeFileSync("ready.txt","Are U ready..??");

const data=fs.readFileSync("ready.txt","utf-8");
console.log(data)
console.log("after the data")
