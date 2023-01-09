exports.helloFunction = (your_name) => {
    console.log(`Hello ${your_name}. How are you.`);
}
const fs = require('fs');
const path = require('path');
const directoryPath = path.join(__dirname, 'Documents');
console.log(directoryPath);
console.log(__dirname);
// const inquirer = require('inquirer');
// const globle_input = async () => {
//     const email_input = await inquirer
//         .prompt([
//             {
//                 type: 'text',
//                 name: 'path',
//                 message: 'Enter the path of your project/files:',
//             },
//         ])
//     console.log(email_input);
// }
// async function CreateSuperUser() {
//     await globle_input();
// };

// CreateSuperUser();