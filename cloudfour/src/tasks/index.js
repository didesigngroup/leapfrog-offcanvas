'use strict';

import externalTasks from 'core-gulp-tasks';
import iconsTask from './icons';
import scssTask from './scss';

/* Export the external core tasks combined with all the local tasks. */
export default Object.assign(externalTasks, {
  icons: iconsTask,
  scss: scssTask
});
