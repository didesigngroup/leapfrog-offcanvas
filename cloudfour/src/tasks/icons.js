'use strict';

import svgSprite from 'gulp-svg-sprite';

export default function (gulp, options) {
  var dest = options.dest;
  var svgSpriteOpts = options.plugins.svgSprite;
  var src = options.src;

  function task () {
    return gulp.src(src)
      .pipe(svgSprite(svgSpriteOpts))
      .pipe(gulp.dest(dest));
  }

  /* Future-prep for Gulp 4.0 --tasks output */
  task.description = 'Optimize and combine individual svg files into a single sprite file';

  return gulp.task('icons', task);
};
