import assemble from 'fabricator-assemble';
import config from './gulp.config.js';
import gulp from 'gulp';
import tasks from './src/tasks';
import utils from 'gulp-util';

let env = utils.env;

/* Register core tasks */
[
  'clean',
  'css',
  'scss',
  'js',
  'scss',
  'icons',
  'serve',
  'watch'
].forEach(task => {
  tasks[task](gulp, config[task]);
});

/* Register Assembly task */
gulp.task('assemble', () => assemble(config.assemble));

/* Register composite tasks */
gulp.task('frontend', [
  'assemble',
  'css',
  'scss',
  'icons',
  'js'
]);

/* Build task (for continuous deployment via Netflify) */
gulp.task('build', ['clean'], (done) => {
  gulp.start('frontend');
  done();
});

/* Register default task */
gulp.task('default', ['frontend'], (done) => {
  gulp.start('serve');
  if (env.dev) {
    gulp.start('watch');
  }
  done();
});
