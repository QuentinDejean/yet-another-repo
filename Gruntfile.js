module.exports = function(grunt) {
    grunt.initConfig({
        bump: {
            scripts: {
                files: ["package,json", "bower.json"],
                updateConfigs: ["pkg"],
                commitFiles: ["-a"],
                push: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-bump');
};