exports.helloFunction = (your_name) => {
    console.log(`Hello ${your_name}. How are you.`);
}
const insertLine = require('insert-line')
const fs = require('fs');

async function travelAllDirectories(directory_name) {
    await getDirectories(directory_name, function (err, res) {
        if (err) {
            console.log('Error', err);
        } else {
            res.forEach(element => {
                if (element.includes(".js") || element.includes(".ts")) {
                    insertLine(element).contentSync('//created by Tushar Prajapati').at(3)
                    // fs.appendFile(element, '//created by Tushar Prajapati', function (err) {
                    //     if (err) throw err;
                    //     console.log('Saved!');
                    // });
                } else {
                    console.log("else", element);
                    travelAllDirectories(element);
                }
            });
        }
    });
}

const glob = require("glob");

let getDirectories = async function (src, callback) {
    glob(src + '/**/*', callback);
};

const inquirer = require('inquirer');
const directoryName = async () => {
    const dir_path = await inquirer
        .prompt([
            {
                type: 'text',
                name: 'path',
                message: 'Enter the path of your project/files:',
            },
        ])
    console.log(dir_path);
    await travelAllDirectories(dir_path.path)
}
async function AddWaterMark() {
    await directoryName();
};

AddWaterMark();