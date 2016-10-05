/**
 * The DI application controller manages UI elements, events and themes. 
 * Data is provided by the DataService.
 */
'use strict';
app.controller('DIController',
		['$scope', '$http', '$window', '$compile','config', '$filter', '$timeout',/* 'localize',*/
		 function DIController($scope, $http, $window, $compile, config, $filter, $timeout /*, localize*/) {

	var log = new Logger({name : 'CommonController', level : config.logLevel });

	/** Reference to Controller (self/this) */
	var self = $scope;
	
	// Extending this controller functionality with Base functionality.
	//AppBaseController(self, $http, $window, $compile, config, localize, null, $filter, $timeout);

	/** Application Configuration Data holder */
	self.config = new AppConfig(config, 'en', $window.navigator );

	/** Reference to HTTP service */
	self.webService = new WebService(self, $http);

	// Controller Level Flag true, when All level of controller get initialized.
	self.readyFlag = false;


    self.simulateLazyHash = function() {
        var hash = AppUtils.getURLHash();
		if(hash) {
			$("#simulateLazyHash")[0].href = hash;
			$("#simulateLazyHash")[0].click();
		}

    };
	/**
	* Initializes the layout when page is ready.
	*/
	$(function() {

        log.info('Loading {} {} - please wait ...', self.config.appName, self.config.appRelease);

        self.config.update({
            appEnv:'POC',
            appSysVersion:'0.1'
        });


        log.info('Ready');
        self.readyFlag = true;
	});

}]);