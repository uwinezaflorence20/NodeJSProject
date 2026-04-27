const fs = require('fs');
const readStrearm = fs.createReadStream('./docs/blog3.txt',{encoding:'utf8'})
readStrearm.on('data',(chunk)=>{
    console.log('---------------- NEW CHUNKS------------')
    // console.log(chunk.toString());
    console.log(chunk)
})