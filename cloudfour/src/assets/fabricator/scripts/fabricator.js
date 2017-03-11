'use strict';

var ClassList = require('classlist');
require('./prism');
require('./tota11y');
var $ = require('jquery');

/**
 * Global `fabricator` object
 * @namespace
 */
var fabricator = window.fabricator = {};


/**
 * Default options
 * @type {Object}
 */
fabricator.options = {
	toggles: {
		labels: true,
		notes: true,
		code: false
	}
};

/**
 * Feature detection
 * @type {Object}
 */
fabricator.test = {};

// test for sessionStorage
fabricator.test.sessionStorage = (function () {
	var test = '_f';
	try {
		sessionStorage.setItem(test, test);
		sessionStorage.removeItem(test);
		return true;
	} catch(e) {
		return false;
	}
}());

// create storage object if it doesn't exist; store options
if (fabricator.test.sessionStorage) {
	sessionStorage.fabricator = sessionStorage.fabricator || JSON.stringify(fabricator.options);
}


/**
 * Cache DOM
 * @type {Object}
 */
fabricator.dom = {
	root: document.querySelector('html'),
	primaryMenu: document.querySelector('.f-Nav'),
	menuItems: document.querySelectorAll('.f-Nav-item'),
	menuToggle: document.querySelector('.f-Nav-header-toggle'),
	labels: document.querySelectorAll('[data-f-toggle="labels"]'),
	notes: document.querySelectorAll('[data-f-toggle="notes"]'),
	code: document.querySelectorAll('[data-f-toggle="code"]'),
	themeSelect: document.querySelector('[data-f-select="theme"]')
};


/**
 * Get current option values from session storage
 * @return {Object}
 */
fabricator.getOptions = function () {
	return (fabricator.test.sessionStorage) ? JSON.parse(sessionStorage.fabricator) : fabricator.options;
};


/**
 * Add `f-active` class to active menu item
 */
fabricator.setActiveItem = function () {

	/**
	 * @return {Array} Sorted array of menu item 'ids'
	 */
	var parsedItems = function () {

		var items = [],
			id, href;

		for (var i = fabricator.dom.menuItems.length - 1; i >= 0; i--) {

			// remove active class from items
			fabricator.toggleClass(fabricator.dom.menuItems[i], 'f-is-active', false);

			// get item href
			href = fabricator.dom.menuItems[i].getAttribute('href');

			// get id
			if (href.indexOf('#') > -1) {
				id = href.split('#').pop();
			} else {
				id = href.split('/').pop().replace(/\.[^/.]+$/, '');
			}

			items.push(id);

		}

		return items.reverse();

	};


	/**
	 * Match the 'id' in the window location with the menu item, set menu item as active
	 */
	var setActive = function () {

		var href = window.location.href,
			items = parsedItems(),
			id, index;

		// get window 'id'
		if (href.indexOf('#') > -1) {
			id = window.location.hash.replace('#', '');
		} else {
			id = window.location.pathname.split('/').pop().replace(/\.[^/.]+$/, '');
		}

		// In case the first menu item isn't the index page.
		if (id === '') {
			id = 'index';
		}

		// find the window id in the items array
		index = (items.indexOf(id) > -1) ? items.indexOf(id) : 0;

		// set the matched item as active
		fabricator.toggleClass(fabricator.dom.menuItems[index], 'f-is-active', true);

	};

	window.addEventListener('hashchange', setActive);

	setActive();

	return this;

};


/**
 * Click handler to primary menu toggle
 * @return {Object} fabricator
 */
fabricator.menuToggle = function () {

	fabricator.dom.menuToggle.addEventListener('click', function () {
		fabricator.toggleClass(fabricator.dom.primaryMenu, 'f-is-open');
	});

	return this;

};

fabricator.saveOptions = function (options) {
	if (fabricator.test.sessionStorage) {
		sessionStorage.setItem('fabricator', JSON.stringify(options));
	}
};

fabricator.setToggleOption = function (toggleType, state) {
	let options = fabricator.getOptions();
	let toggleValue = options.toggles[toggleType];

	options.toggles[toggleType] = (state == null) ? !toggleValue : state;
	fabricator.saveOptions(options);
};

fabricator.toggleClass = function (element, className, state) {
	let classList = element.classList || ClassList(element);
	switch (state) {
		case true:
			classList.add(className);
			break;
		case false:
			classList.remove(className);
			break;
		default:
			classList.toggle(className);
			break;
	}
};

fabricator.toggleClassAll = function (elements, className, state) {
	Array.prototype.forEach.call(elements, (el) => {
		fabricator.toggleClass(el, className, state);
	});
};

/**
 * Handler for single item code toggling
 */
fabricator.singleItemToggle = function () {

	var itemToggleSingle = document.querySelectorAll('.f-Item [data-f-toggle-control]');

	// toggle single
	var toggleSingleItemCode = function (e) {
		var group = this.parentNode.parentNode.parentNode,
			type = e.currentTarget.getAttribute('data-f-toggle-control');
		e.preventDefault();
		fabricator.toggleClass(group.querySelector('[data-f-toggle=' + type + ']'), 'f-u-hidden');
	};

	for (var i = 0; i < itemToggleSingle.length; i++) {
		itemToggleSingle[i].addEventListener('click', toggleSingleItemCode);
	}

	return this;

};


/**
 * Automatically select code when code block is clicked
 */
fabricator.bindCodeAutoSelect = function () {

	var codeBlocks = document.querySelectorAll('.f-item-code');

	var select = function (block) {
		var selection = window.getSelection();
		var range = document.createRange();
		range.selectNodeContents(block.querySelector('code'));
		selection.removeAllRanges();
		selection.addRange(range);
	};

	for (var i = codeBlocks.length - 1; i >= 0; i--) {
		codeBlocks[i].addEventListener('click', select.bind(this, codeBlocks[i]));
	}

	return this;
};

/**
 * Relocate modal demos.
 *
 * This lame bit of code is needed to make modal "demos" (where they start off
 * hidden before being triggered) work.
 */

fabricator.fixModals = function () {
  $(function () {
    var $targetModals = $('.f-Item-preview > .modal[id]');
    $targetModals.appendTo(document.body);
  });
};

/**
 * Theme Swapper
 *
 */
fabricator.bindThemeSelect = function () {
  var options = this.getOptions();
  var $themeSelect = $(fabricator.dom.themeSelect);

  function changeTheme (theme) {
    var $this = $(this);
    var $stylesheet = $($this.data('f-target'));
    var href = $stylesheet.attr('href');
    var pattern = /[\w-]+\.css$/;

    if (href.indexOf(pattern) == -1) {
      $stylesheet.attr('href', href.replace(pattern, theme));
      options.theme = theme;
      fabricator.saveOptions(options);
    }
  }

  $themeSelect.change(function () {
    changeTheme.call(this, $themeSelect.val());
  });

  if (options.theme) {
    changeTheme.call($themeSelect, options.theme);
    $themeSelect.get(0).value = options.theme;
  }

  return this;
};

/**
 * Initialization
 */
(function () {
	// invoke
	fabricator
		.menuToggle()
		.singleItemToggle()
		.setActiveItem()
		.bindCodeAutoSelect()
		.bindThemeSelect()
		.fixModals();
}());
