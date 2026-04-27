const fs = require('fs');
const readStrearm = fs.createReadStream('./docs/blog3.txt',{encoding:'utf8'});
const writeStrearm = fs.createWriteStream('./docs/blog4.txt',{encoding:'utf8'})
// readStrearm.on('data',(chunk)=>{
//     console.log('---------------- NEW CHUNKS------------')
//     // console.log(chunk.toString());
//     console.log(chunk);
//     writeStrearm.write('\nNEW CHUNK\n');
//     writeStrearm.write(chunk)
    
// })

// using piping
readStrearm.pipe(writeStrearm);