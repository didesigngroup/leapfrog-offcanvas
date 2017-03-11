'use strict';

import React from 'react';
import TransitionGroup from 'react-addons-css-transition-group';
import { concat } from 'ramda';
import { space } from '../lib/util/list';
import { keysByTrue } from '../lib/util/object';

export default function Calendar (props) {
  var {
    months,
    weekdays,
    dates,
    handleDateChange
  } = props;

  return (
    <table className={"di-calendar di-calendar--detailed di-datepicker__calendar"}>
      <Calendar.Columns
       items={weekdays}
      />
      <Calendar.Headings
       items={weekdays}
      />
      <Calendar.Month
       handleDateChange={handleDateChange}
       weeks={dates}
      />
    </table>
  );
}

Calendar.Headings = (props) => {
  var { items } = props;
  return (
    <thead className={"di-calendar__rows"}>
      <tr className={"di-calendar__row"}>
        {items.map((value, index, list) => {
          return (
            <th className={"di-calendar__heading"} key={index} scope="col">
              <abbr className={"u-border-none"} title={value}>
                {value[0]}
              </abbr>
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

Calendar.Columns = (props) => {
  var { items } = props;
  return (
    <colgroup>
      {items.map((value, index, list) => {
        var classList = ['di-calendar__col'];
        if (index == 0 || index == list.length - 1) {
          classList.push('di-calendar__col--disabled');
        }
        return (
          <col className={space(classList)} key={index}/>
        );
      })}
    </colgroup>
  );
};

Calendar.Month = (props) => {
  var { weeks } = props;
  return (
    <TransitionGroup
     component="tbody"
     className={"di-calendar__rows"}
     transitionName={{
       enter: 'transition-slide-down',
       leave: 'transition-slide-up',
       enterActive: 'is-active',
       leaveActive: 'is-active'
     }}
     transitionEnterTimeout={200}
     transitionLeaveTimeout={200}
    >
      {weeks.map((week, index) => {
        var key = week.map(item => item.id).join('|');
        return (
          <Calendar.Week
           {...props}
           key={key}
           days={week}
          />
        );
      })}
    </TransitionGroup>
  );
};

Calendar.Week = (props) => {
  var { days, handleDateChange } = props;
  return (
    <tr className={"di-calendar__row"}>
      {props.days.map((day, index) => {
        var key = index;
        return (
          <Calendar.Day
           {...day}
           key={key}
           onSelect={handleDateChange.bind(this, day)}
          />
        );
      })}
    </tr>
  );
};

Calendar.Day = (props) => {
  var {
    date,
    id,
    isInMonth,
    isWeekend,
    isScheduled,
    isSelected,
    isStart,
    isToday,
    onSelect
  } = props;

  var buttonClassList = ['di-calendar__choice'];
  var buttonClassStateMap = {
    'is-current': isToday,
    'is-indeterminate': isScheduled,
    'is-targeted': isSelected,
    'is-selected': isStart,
    'is-disabled': !isInMonth || isWeekend
  };

  buttonClassList = concat(
    buttonClassList,
    keysByTrue(buttonClassStateMap)
  );

  return (
    <td className={"di-calendar__cell"}>
      {
        date ?
        <button
         className={space(buttonClassList)}
         onClick={onSelect}
         disabled={isWeekend}
         type="button">
          {date}
        </button> : null
      }
    </td>
  );
};
