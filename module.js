const moduImport = require('./person')
const {people,age} = require('./person');// using destruction
console.log(moduImport)
console.log(moduImport.people,moduImport.ages)

// build in object that have the information on the operating system
const os = require('os');
console.log(os.platform,os.homedir);
