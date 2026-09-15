//firstly import fs(File System) module in your program
const fs = require("fs");
//create file and also write some content  in that file
fs.writeFile("Student.txt","Hello , this file is for student ! ", (err)=>{
    if(err){
        console.log(err);
    }
     else{
        console.log("File is created successfully.");
    }
}) ;
//Now reading file content
fs.readFile("Student.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Content of File") ;
        console.log(data);
    }
});
//Update a file using appendFile method it will only add the content in the file not replace it
fs.appendFile("Student.txt"," File of CSE 3rd sem",(err)=>{
    if(err) throw err ;
    else{
        console.log("File successfully updated.");
    }
}); 
//Finally Delete  a File
fs.unlink("Student.txt", (err)=>{
    if(err) throw err ;
    else{
        console.log("File deleted.");
    }
});