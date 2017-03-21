'use strict';

import React from 'react';

export default class Pager extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    var {
      label,
      handlePrev,
      handleNext
    } = this.props;

    return (
      <div className={"di-arrange di-arrange--middle"}>
        <div className={"di-arrange__fit text-left"}>
          <Pager.Button
           label={"Previous"}
           direction={"back"}
           handleClick={handlePrev}
          />
        </div>
        <div className={"di-arrange__fill text-center"}>
          {label}
        </div>
        <div className={"di-arrange__fit text-right"}>
          <Pager.Button
           label={"Next"}
           direction={"forward"}
           handleClick={handleNext}
          />
        </div>
      </div>
    );
  }
};

Pager.Button = (props) => {
  var {
    label,
    direction,
    handleClick
  } = props;

  return (
    <button
     className={"u-inherit p-a-sm"}
     onClick={handleClick}
     type="button">
      <span className={"sr-only"}>
        {label}
      </span>
      <svg className={"di-icon"} aria-hidden={true}>
        <use xlinkHref={`/assets/icons.svg#${direction}`}></use>
      </svg>
    </button>
  );
};
