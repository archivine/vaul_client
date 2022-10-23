const fs = require('fs');
const {exec, execSync} = require("child_process");
const output = require('./output.js');
const config = require('./config.js');
const resources = require('../resources/build.js');
const {findDestination, findConfigPath} = require('./info.js');


core_path = findDestination();
temp_path = __dirname + "/__temp__";

const init = () => {
    fs.writeFileSync(`${temp_path}/c_app/app/index.js`, resources.index.toString());
    fs.writeFileSync(`${temp_path}/c_app/app/mainScreen.js`, resources.mainScreen.toString());
    fs.writeFileSync(`${temp_path}/c_app/app/mainScreenPreload.js`, resources.mainScreenPreload.toString());
    fs.writeFileSync(`${temp_path}/c_app/app/themes.js`, resources.themes.toString());
}



output.log("extracting asar...");

fs.mkdirSync(temp_path,  { recursive: true })
execSync(`sudo chmod +777 ${temp_path}`);
execSync(`sudo asar extract ${core_path}/core.asar ${temp_path}/c_app`);

output.log("writing...");
config.init();
init();

output.log("packing asar...");
execSync(`sudo asar pack ${temp_path}/c_app ${core_path}/core.asar `)

output.log("cleaning up...");
execSync(`sudo rm -rf ${temp_path}`)

output.log("done!");
output.log("the client has been successfully injected into your discord installation");
output.log("please restart your discord process if you're already running it (you might have to re-login)");