const fs = require('fs');

exports.findDestination = () => {
    var ver_regex = /0.0..../;
    let version;
    var username = fs.readdirSync('/home')[0];

    path = `/home/${username}/.config/discordcanary`
    base = fs.readdirSync(path);
    for (var i of base) {
        if(i.match(ver_regex)) {
            version = i;
            break;
        }
    }

    path = path + `/${version}/modules/discord_desktop_core`
    return path;
}
