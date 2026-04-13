const fs=require("fs");


console.log("1");
// blocking...   request
// const result=fs.readFileSync('contacts.txt',"utf-8");



// non-Blocking...
fs.readFile("contacts.txt","utf-8",(err,result)=>{
    console.log(result);
});

// console.log(result);

console.log("2");