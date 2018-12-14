'use strict';

var autoprefixer = require('autoprefixer');
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var postcss      = require('gulp-postcss');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');

/**
* Process CSS.
*/
gulp.task( 'css', function() {

    var stream = gulp.src( 'elemental.scss' )
        .pipe( plumber() )
        .pipe( sourcemaps.init() )
        .pipe( sass({ outputStyle : 'compressed' }) )
        .pipe( postcss([
            autoprefixer()
        ]) )
        .pipe( sourcemaps.write('./') )
        .pipe( gulp.dest('./') );

    return stream;

});

/**
* Watch task.
*
* The paths must be absolute (not realtive ./) for newly added files to be recognized.
* https://github.com/sindresorhus/gulp-ruby-sass/issues/11#issuecommentt-33660887
*/
gulp.task( 'watch', function() {

    gulp.watch( '*.scss', ['css'] );

});

/**
* Gulp default task.
*/
gulp.task( 'default', ['watch'] );
