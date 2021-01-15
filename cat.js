const fs = require('fs')
const pwdJS = require('./pwd');

module.exports = function (targetFile) {

fs.readFile(`${pwdJS()}/${targetFile}`, 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
  process.stdout.write('\nprompt > ')
})
  }
