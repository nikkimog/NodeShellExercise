const fs = require('fs')
const pwdJS = require('./pwd');


module.exports = function (targetFile) {

fs.readFile(`${pwdJS()}`, 'utf8' , (err, data) => {
  //console.log('pwd()\n', pwdJS());
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})
    //process.stdout.write(targetFile);
  }
