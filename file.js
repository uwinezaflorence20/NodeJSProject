const fs = require('fs')
// reading files 
fs.readFile('./docs/blog1.txt',(err,data)=>{
if(err){
    console.log(err);
}
console.log(data.toString());
});

//writting files
fs.writeFile("./docs/blog2.txt","This is the file that we are going to change",()=>{
    console.log("file was written");
})
// creating the directories
 if (!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
    if(err){
        console.log(err);
    }
    console.log("folder created");
})
 }else{
    fs.rmdir('/assets',(err)=>{
        if(err){
            console.log(err);
        }
        console.log("folder deleted");
    })
 }
