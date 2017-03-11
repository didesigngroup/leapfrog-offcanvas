'use strict';

import moment from 'moment';
import Calendar from './Calendar';
import 'moment-business';

const MONTH_DURATION = moment.duration({ months: 1 });

export default class DatePickerCalendar extends Calendar {

  constructor (date, { range = 0 }) {
    super(date);
    this.rangeDuration = moment.duration({ days: range });
    this.selectDate(this.date.toObject());
  }

  static get months () {
    return moment.months();
  }

  static get weekdays () {
    return moment.weekdays();
  }

  getCaption() {
    return this.date.format('MMMM YYYY');
  }

  getSendDate() {
    return this.getStartDate().format('L');
  }

  getDeliverDate() {
    return this.getEndDate().format('L');
  }

  selectDate (newDate) {
    var dayDelta = this.rangeDuration.days();
    this.date.set(newDate);
    this.relatedDate.set(newDate).addWeekDays(dayDelta);
  }

  selectLastMonth () {
    this.date.subtract(MONTH_DURATION);
    this.selectDate(this.date.toObject());
  }

  selectNextMonth () {
    this.date.add(MONTH_DURATION);
    this.selectDate(this.date.toObject());
  }
}
