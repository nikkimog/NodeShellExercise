process.stdout.write('prompt > ');
const pwdJS = require('./pwd');
const lsJS = require('./ls');
const catJS = require('./cat');
const requestJS= require('./curl')


process.stdin.on('data', (data)=>{
    const cmd=data.toString().trim();
    let cmdArr = cmd.split(' ');

    if (cmd === 'pwd'){
        // process.stdout.write('\nyou called pwd\n');
        pwdJS();
        process.stdout.write('\nprompt > ');
    }
    else if(cmd === 'ls') {
        lsJS();
    }
    else if(cmdArr[0] === 'cat') {
        // process.stdout.write('\nyou called cat\n');
        catJS(cmdArr[1]);
        process.stdout.write('\nprompt > ');
    }
    else if (cmdArr[0]==='curl'){
        console.log(' you got curled ')
        requestJS();
    }
    else {
        // process.stdout.write('\nyou got else\n');
        process.stdout.write(cmdArr[1]);
        process.stdout.write('You typed: '+ cmd);
    }

})
