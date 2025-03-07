const path = require("path");

console.log('filepath', __filename);
console.log('dirpath', __dirname);

console.log('isAbsolute', path.isAbsolute(__filename));
console.log('separator',path.sep);
console.log('delimiter',path.delimiter);
console.log('path',process.env.PATH);
console.log('extension',path.extname(__filename));
console.log('relative path',path.relative(__filename,'F:/2025/MERN/Chirag/Backend/Class1/.Readme'));