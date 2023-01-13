const add_water_mark = require('./dist/scripts/add_watermark')
const inquirer = require('inquirer');

const PerformCommands = async () => {
    const answer = await inquirer
        .prompt([
            {
                type: 'rawlist',
                name: 'reptile',
                message: 'Which do you want to perform?',
                choices: ['add water mark', "abc", "xyz", "zxy"]
            },
        ])
    if (answer.reptile === 'add water mark') {
        await add_water_mark.AddWaterMark();
    } else if (answer.reptile === 'abc') {
        console.log("command process is not applied yet!");

    } else if (answer.reptile === 'xyz') {
        console.log("command process is not applied yet!");
    } else if (answer.reptile === 'zxy') {
        console.log("command process is not applied yet!");
    }
}

PerformCommands();