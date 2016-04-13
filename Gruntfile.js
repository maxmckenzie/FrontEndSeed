var path = require('path');
var LoadGruntConfig = require('load-grunt-config');
var execSync = require('child_process').execSync;

module.exports = function(grunt) {

    require('time-grunt')(grunt);

    LoadGruntConfig(grunt, {
        configPath: path.join(process.cwd(), 'grunt-tasks'),
    });
};
