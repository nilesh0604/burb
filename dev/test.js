var path = require('path'),
  async = require('async'),
  stylesheetsDir = 'assets/css';
  
module.exports = function(grunt) {

	grunt.initConfig({
		clean: ['build/'],

		copy: {
			client: {
				src: 'client/**/*min.{js,css,html}',
				dest: 'build/'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['clean', 'copy']);
};
