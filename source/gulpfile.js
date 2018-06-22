'use strict';

// Dependencies
const gulp = require('gulp');
const deploy = require('gulp-gh-pages');
const browserSync = require('browser-sync').create();

const pug = require('gulp-pug');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const pump = require('pump');

// Setup
const config = {
  src: './',
  dest: '../',
  javascript : [
    './bower_components/jquery/dist/jquery.min.js',
    './javascripts/script.js'
  ],
  watchers: [
    {
      match: ['./markup/**/*.pug'],
      tasks: ['markup']
    },
    {
      match: ['./styles/**/*.sass'],
      tasks: ['styles']
    },
    {
      match: [
        './bower_components/**/*.js',
        './javascripts/**/*.js'
      ],
      tasks: ['scripts']
    }
  ]
};

// Markup Task
gulp.task('markup', () => {
  return gulp.src('./markup/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(config.dest));
});

// Styles Task
gulp.task('styles', () => {
  return gulp.src('./styles/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./../css/'));
});

// Javscript Task
gulp.task('scripts', (cb) => {
  pump([
    gulp.src(config.javascript),
    concat('script.js'),
    uglify(),
    gulp.dest('./../js/')
  ],
    cb
  );
});

// Server Task
gulp.task('serve', () => {
  browserSync.init({
    open: false,
    notify: false,
    files: ['./**/*'],
    server: config.dest
  });
});

// Watcher
gulp.task('watch', () => {
  config.watchers.forEach(item => {
    gulp.watch(item.match, item.tasks);
  });
});

// Main Task
gulp.task('default', ['markup', 'styles', 'scripts'], done => {
    gulp.start('serve');
    gulp.start('watch');
  done();
});

// Deploy
gulp.task('deploy', done => {
  return gulp.src("./**/*")
    .pipe(deploy())
});