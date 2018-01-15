var fs = require('fs');

module.exports = {
    pwd,
    date,
    ls,
};



function pwd(file) {
    process.stdout.write(process.argv[1]);
}

function date(file) {
    process.stdout.write(Date());
}

function ls(file) {
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
            process.stdout.write(file.toString() + "\n");
        });
    });
}

function echo(file) {
    process.stdout.write('You typed: ' + cmd);
}