module.exports = function(grunt) {
    grunt.initConfig({
        bump: {
            scripts: {
                files: ["ngParcelService.js"],
                updateConfigs: ["pkg"],
                commitFiles: ["-a"],
                push: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-bump');
};