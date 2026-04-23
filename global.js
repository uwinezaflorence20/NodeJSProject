// in node we get the access to the global object
console.log(global) 
global.setTimeout(() => {
    console.log('in the timeout')
    clearInterval(int);
}, 3000);

const int = setInterval(()=>{
    console.log("in the interval")
},1000)
console.log(__dirname)// path of the directoey
console.log(__filename);// path of the directory and the filename