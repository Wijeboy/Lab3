const fs = require('fs');

fs.writeFile('file.txt', 'my name is flash', (err) => {
    if (err) throw err;
    console.log('File saved!');
});
