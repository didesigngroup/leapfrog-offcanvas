/**
 * Toolkit JavaScript
 */

'use strict';

var svg4everybody = require('imports?this=>global!svg4everybody');
var $ = require('jquery');

console.log(`Fabricatin' at ${Date.now()}`);
console.log(`Using jQuery version ${$.fn.jquery}`);

svg4everybody();

$('[data-toggle]').on('click', event => {
  const $this = $(event.currentTarget);
  $this.data('active', !$this.data('active'));
});

$('[data-toggle~="arrow"]').on('click', event => {
  const $this = $(event.currentTarget);
  const $indicator = $this.find($this.data('indicator'));
  $indicator.toggleClass('u-rotate-180', $this.data('active'));
});

$('[data-toggle~="visibility"]').on('click', event => {
  const $this = $(event.currentTarget);
  const $target = $($this.data('target'));
  $target.toggleClass('hidden');
});

$('[data-toggle-proxy]').on('click', event => {
  const $this = $(event.currentTarget);
  const $proxy = $($this.data('toggleProxy'));
  $proxy.trigger(event.type);
});
