'use strict';

import R, {
  __,
  join,
  insertAll,
  repeat,
  split
} from 'ramda';

export var space = join(' ');
export var splitSpaces = split(' ');
export var pad = (value, length, from) => insertAll(from, repeat(value, length));
