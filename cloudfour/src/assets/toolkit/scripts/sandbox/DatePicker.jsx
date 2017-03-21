'use strict';

import React from 'react';
import { pick } from 'ramda';
import moment from 'moment';
import Calendar from './Calendar.jsx';
import Pager from './Pager.jsx';

export default class DatePicker extends React.Component {

  constructor (props) {
    super(props);
    this.state = this.getWholeState();
  }

  getWholeState () {
    var { calendar } = this.props;
    return {
      dates: calendar.getDates(),
      caption: calendar.getCaption(),
      sendOn: calendar.getSendDate(),
      deliverBy: calendar.getDeliverDate()
    };
  }

  setWholeState () {
    this.setState(this.getWholeState());
  }

  handleDateChange (dateObj) {
    this.props.calendar.selectDate(dateObj);
    this.setWholeState();
  }

  handleMonthChange (delta) {
    switch (delta) {
      case 1: default:
        this.props.calendar.selectNextMonth();
        break;
      case -1:
        this.props.calendar.selectLastMonth();
        break;
    }
    this.setWholeState();
  }

  render () {
    var { weekdays } = this.props;
    var {
      dates,
      sendOn,
      deliverBy,
      caption
    } = this.state;

    return (
      <div className={"di-datepicker di-datepicker--contained"}>
        <DatePicker.Nav
         label={caption}
         handlePrev={this.handleMonthChange.bind(this, -1)}
         handleNext={this.handleMonthChange.bind(this, 1)}
        />
        <Calendar
         weekdays={weekdays}
         dates={dates}
         handleDateChange={this.handleDateChange.bind(this)}
        />
        <DatePicker.Footer
         sendOn={sendOn}
         deliverBy={deliverBy}
        />
      </div>
    );
  }
};

DatePicker.Nav = (props) => {
  var {
    label,
    handlePrev,
    handleNext
  } = props;

  return (
    <div className={"di-datepicker__nav"}>
      <Pager
       label={label}
       handlePrev={handlePrev}
       handleNext={handleNext}
      />
    </div>
  );
};

DatePicker.Footer = (props) => {
  var { sendOn, deliverBy } = props;
  var deliverByStyle = { color: "#d44403" };

  return (
    <div className={"p-b-sm"}>
      <div className={"row m-y-sm"}>
        <span className={"col-xs-4 text-success text-right"}>
          Send on:
        </span>
        <time className={"col-xs-8"} dateTime={"2015-05-30"}>
          {sendOn}
        </time>
      </div>
      <div className={"row m-y-sm"}>
        <span className={"col-xs-4 text-right"} style={deliverByStyle}>
          Deliver by:
        </span>
        <time className={"col-xs-8"} dateTime={"2015-05-30"}>
          {deliverBy}
        </time>
      </div>
    </div>
  );
};
