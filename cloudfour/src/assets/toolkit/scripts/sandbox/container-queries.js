'use strict';

import { filter, gte, last, sort, toString, zipObj } from 'ramda';
import { splitSpaces } from '../lib/util/list';
import $ from 'jquery';
import debounce from 'debounce';

function getBreakpoint (width, breakpoints) {
  return last(filter(gte(width), sort((a, b) => a - b, breakpoints)));
}

function onResize () {
  $('[data-container-size]').each((i, el) => {
    const $el = $(el);
    const $parent = $el.parent();
    const parentWidth = $parent.width();
    const data = $el.data();
    const breakpoints = splitSpaces(data.breakpoints).map(n => parseInt(n, 10));
    const sizeMap = zipObj(breakpoints, ['sm', 'md', 'lg', 'xl']);
    const breakpoint = getBreakpoint(parentWidth, breakpoints)
    const size = sizeMap[breakpoint] || '';
    $el.attr('data-container-size', size);
  })
}

export default function () {
  const handler = debounce(onResize, 200);
  $(window).on('resize', handler).trigger('resize');
};
