const fs = require('fs-extra');
const path = require('path');

process.env.NODE_ENV = 'development';
process.env.APP_NAME = 'wsc';

const deleteFolder = function (p) {
  fs.removeSync(p);
};

deleteFolder(path.resolve(__dirname, '..', 'dist'));
console.log('dist目录清除完成\n');
