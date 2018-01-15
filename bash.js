const commands = require("./command");

const { pwd, date, ls } = commands;

process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
    var cmd = data.toString().trim();
    if (typeof commands[cmd] === "function") {
        commands[cmd]();
    }
    process.stdout.write('\nprompt > ');
});

// var filepath = process.env.PWD.split("/")
// console.log(filepath[filepath.length - 1])