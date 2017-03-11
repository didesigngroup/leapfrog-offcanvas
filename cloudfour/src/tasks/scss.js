'use strict';

import sass from 'gulp-sass';

export default function (gulp, options) {
  var dest = options.dest;
  var sassOpts = options.plugins.sass;
  var src = options.src;

  function task () {
    return gulp.src(src)
      .pipe(sass(sassOpts))
      .pipe(gulp.dest(dest));
  }

  /* Future-prep for Gulp 4.0 --tasks output */
  task.description = 'Compile and combine SCSS files.';

  return gulp.task('scss', task);
};
