// const glob = require("glob");
// const inquirer = require('inquirer');
// const insertLine = require('insert-line')
// async function travelAllDirectories(directory_name, message) {
//     await getDirectories(directory_name, function (err, res) {
//         if (err) {
//             console.log('Error', err);
//         } else {
//             res.forEach(element => {
//                 if (element.includes(".js") || element.includes(".ts")) {
//                     insertLine(element).contentSync(`//${message}`).at(1)
//                     insertLine(element).appendSync(`//${message}`)
//                 } else {
//                     console.log("else", element);
//                     travelAllDirectories(element, message);
//                 }
//             });
//         }
//     });
// }

// let getDirectories = async function (src, callback) {
//     glob(src + '/**/*', callback);
// };

// const directoryName = async () => {
//     const dir_path = await inquirer
//         .prompt([
//             {
//                 type: 'text',
//                 name: 'path',
//                 message: 'Enter the path of your project/files:',
//             },
//         ])
//     const message = await inquirer
//         .prompt([
//             {
//                 type: 'text',
//                 name: 'message',
//                 message: 'Enter the message you want to watermark:',
//             },
//         ])
//         await travelAllDirectories(dir_path.path, message.message)
//     }
//     async function AddWaterMark() {
//         await directoryName();
//         console.log("watermark added successfully!");
// };

// AddWaterMark();

require('./dist/scripts/add_watermark')