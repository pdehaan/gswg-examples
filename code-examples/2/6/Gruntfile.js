module.exports = function(grunt) {

  // Load all tasks in the tasks directory.
  grunt.loadTasks('./tasks');

  // Project configuration.
  grunt.initConfig({
    consoleCheck: {
      file: './build/app.js'
    }
  });

  // Define the default task
  grunt.registerTask('default', ['consoleCheck']);
};