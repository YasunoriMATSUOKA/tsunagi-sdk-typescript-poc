const fse = require('fs-extra');

function toLowerCamelCase(snakeCase) {
  return snakeCase
    .split('_')
    .map(function (word, index) {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

function toUpperCamelCase(snakeCase) {
  return snakeCase
    .split('_')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

function toUpperSnakeCase(snakeCase) {
  return snakeCase.toUpperCase();
}

const directory = './src/catjson/';
// fse.readdirSync(directory).forEach((file) => {
//   console.log(`    case "${toUpperSnakeCase(file.replace('.json', ''))}":`);
//   console.log(`      return ${toLowerCamelCase(file.replace('.json', ''))}Catjson;`);
// });

fse.readdirSync(directory).forEach((file) => {
  console.log(`    case "${toUpperSnakeCase(file.replace('.json', ''))}":`);
  console.log(`      return ${toLowerCamelCase(file.replace('.json', ''))}Catjson;`);
});
