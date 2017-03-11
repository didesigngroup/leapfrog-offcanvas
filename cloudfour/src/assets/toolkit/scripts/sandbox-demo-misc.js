'use strict';

import $ from 'jquery';
import { clone } from 'ramda';
import React from 'react';
import ReactDOM from 'react-dom';
import DatePickerCalendar from './sandbox/DatePickerCalendar';
import DatePicker from './sandbox/DatePicker.jsx';

const BUSINESS_DAYS_REQUIRED_TO_TRANSFER_FUNDS = 4;

ReactDOM.render(
  React.createElement(DatePicker, {
    weekdays: DatePickerCalendar.weekdays,
    calendar: new DatePickerCalendar(new Date, {
      range: BUSINESS_DAYS_REQUIRED_TO_TRANSFER_FUNDS
    })
  }),
  $('#demo1').get(0)
);

ReactDOM.render(
  React.createElement(DatePicker, {
    weekdays: DatePickerCalendar.weekdays,
    calendar: new DatePickerCalendar(new Date, {
      range: BUSINESS_DAYS_REQUIRED_TO_TRANSFER_FUNDS * -1
    })
  }),
  $('#demo2').get(0)
);
