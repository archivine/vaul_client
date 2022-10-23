const fs = require('fs');

exports.init = () => {

    var username = fs.readdirSync('/home')[0];
    base_path = `/home/${username}/.config/vaul_client`
    fs.mkdirSync(base_path,  { recursive: true })
    fs.mkdirSync(base_path + "/themes",  { recursive: true })

    cfg = `
{
    "current_theme": "default.css"
}`

    fs.writeFileSync(`${base_path}/config.json`, cfg);
}