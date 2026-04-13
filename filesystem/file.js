const fs=require("fs");



// sync..    call thaa    Blocking request hai
// fs.writeFileSync('./test.txt',"hey There");


// async    non-blocikg request hai
// fs.writeFile('./test.txt',"hey There async",(err)=>{});


// const result =fs.readFileSync('./contacts.txt',"utf-8");
// console.log(result);



// async doest not return sny thing
// fs.readFile('./contacts.txt',"utf-8" ,(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     } else{
//        console.log(result); 
//     }
// })



// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());
//  fs.appendFileSync("./test.txt"," How are you \n");
// fs.appendFileSync("./test.txt",` ${Date.now()}How are you \n`);



// fs.cpSync("./test.txt","./copy.txt");


// delete karne ka liye file
// fs.unlinkSync("")


// file system ke stast bhi dekh sakte hoo easily

console.log(fs.statSync("./test.txt").isFile())
