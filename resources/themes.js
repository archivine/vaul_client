const fs = require('fs');

var username = fs.readdirSync('/home')[0];
var config_path = `/home/${username}/.config/vaul_client`;
var config_file = fs.readFileSync(`${config_path}/config.json`);
var config = JSON.parse(config_file);

let current_theme = config.current_theme;

module.exports = {
    username: username,
    current_theme: current_theme,
    config_path: config_path
}