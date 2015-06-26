module.exports = function(grunt) {
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: ['Gruntfile.js', 'config/*.js', 'modules/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },

    jasmine: {
		pivotal: {
		  src: 'modules/**/*.js',
		  options: {
		    specs: 'test/modules/**/*Spec.js',
		    helpers: 'test/modules/**/*Helper.js'
		  }
		}
	},

    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['jasmine:pivotal']);
};