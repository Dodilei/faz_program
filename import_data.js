child_process = require('child_process');

const file = 'sheet.xlsx';
const tables = JSON.parse(
    child_process.execSync(`python -m import_data ${file} --analyze`)
    );
console.log(tables);