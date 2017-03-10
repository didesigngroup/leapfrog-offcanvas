'use strict';

import R from 'ramda';

export function extend (subject, ...sources) {
  for (let i = 0; i < sources.length; i++) {
    if (!sources[i]) {
      continue;
    }
    for (var key in sources[i]) {
      if (sources[i].hasOwnProperty(key)) {
        subject[key] = sources[i][key];
      }
    }
  }
  return subject;
}

export function keysByTrue (subject) {
  var equalsTrue = R.equals(true);
  var pickByTrue = R.pickBy(equalsTrue);
  return R.keys(pickByTrue(subject));
}
