/* global module: true */
module.exports = function (grunt) {
  grunt.initConfig({
    sprite: {
      files: {
        src: 'images/*.png',
        dest: 'dist/spritesheet.png',
        destCss: 'dist/sprites.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-spritesmith');

  grunt.registerTask('default', ['sprite']);
};
