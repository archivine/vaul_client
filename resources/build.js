const fs = require('fs');

module.exports = {
    index: fs.readFileSync(`${__dirname}/index.js`, 'utf-8'),
    mainScreen: fs.readFileSync(`${__dirname}/mainScreen.js`, 'utf-8'),
    mainScreenPreload: fs.readFileSync(`${__dirname}/mainScreenPreload.js`, 'utf-8'),
    themes: fs.readFileSync(`${__dirname}/themes.js`, 'utf-8')
}