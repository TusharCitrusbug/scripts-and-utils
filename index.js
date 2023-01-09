exports.helloFunction = (your_name) => {
    console.log(`Hello ${your_name}. How are you.`);
}

async function travelAllDirectories(directory_name) {
    await getDirectories('directory_name', function (err, res) {
        if (err) {
            console.log('Error', err);
        } else {
            console.log(res,"responseioooooooooooooooooo----");
        }
    });
}

const glob = require("glob");

let getDirectories = async function (src, callback) {
    glob(src + '/**/*', callback);
};

const inquirer = require('inquirer');
const directoryName = async () => {
    const email_input = await inquirer
        .prompt([
            {
                type: 'text',
                name: 'path',
                message: 'Enter the path of your project/files:',
            },
        ])
    await travelAllDirectories(email_input)
}
async function AddWaterMark() {
    await directoryName();
};

AddWaterMark();