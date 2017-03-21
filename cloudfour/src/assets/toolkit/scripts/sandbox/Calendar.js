'use strict';

import moment from 'moment';
import {
  merge,
  splitEvery,
  times
} from 'ramda';
import 'moment-business';

const DAY_DURATION = moment.duration({ days: 1 });
const DAY_COUNT_PER_WEEK = moment.duration({ weeks: 1 }).days();

export default class Calendar {

  constructor (date) {
    this.date = moment(date).startOf('day');
    this.relatedDate = moment(this.date);
  }

  getStartDate() {
    return moment.min(this.date, this.relatedDate);
  }

  getEndDate() {
    return moment.max(this.date, this.relatedDate);
  }

  getBounds() {
    var startDate = this.getStartDate();
    var endDate = this.getEndDate();
    var start = this.date.clone()
      .startOf('month')
      .startOf('week');
    var end = this.date.clone()
      .endOf('month')
      .endOf('week')
      .startOf('day');

    if (start.isAfter(startDate, 'day')) {
      start = startDate.clone().startOf('week');
    }

    if (end.isBefore(endDate, 'day')) {
      end = endDate.clone().endOf('week').startOf('day');
    }

    return [start, end];
  }

  getDates() {
    var [cursor, cursorEnd] = this.getBounds();
    var date = this.date;
    var dateNow = Date.now();
    var startDate = this.getStartDate();
    var endDate = this.getEndDate();
    var dateCount = cursorEnd.diff(cursor, 'day') + 1;

    function addResult () {
      var result = merge(cursor.toObject(), {
        id: cursor.format('YYYY-MM-DD'),
        isInMonth: cursor.isSame(date, 'month'),
        isToday: cursor.isSame(dateNow, 'day'),
        isScheduled: cursor.isBetween(startDate, endDate, 'day'),
        isSelected: cursor.isSame(endDate, 'day'),
        isStart: cursor.isSame(startDate, 'day'),
        isWeekend: cursor.isWeekendDay()
      });

      cursor.add(DAY_DURATION);
      return result;
    }

    return splitEvery(DAY_COUNT_PER_WEEK, times(addResult, dateCount));
  }
}
