process.stdout.write('prompt > ');
process.stdin.on('data', (data)=>{
    const cmd=data.toString().trim();

    if (cmd==='pwd'){
        process.stdout.write(process.cwd())
        process.stdout.write('\n prompt > ')
        return
    }

    process.stdout.write('You typed: '+ cmd);
    process.stdout.write('\nprompt > ');
})
