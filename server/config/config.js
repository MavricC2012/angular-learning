var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        db: 'mongodb://MavricC2012:multivision@ds041643.mongolab.com:41643/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}
