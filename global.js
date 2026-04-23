// in node we get the access to the global object
console.log(global) 
global.setTimeout(() => {
    console.log('in the timeout')
}, 3000);