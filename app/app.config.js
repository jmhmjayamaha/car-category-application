'use strict'

angular.module('myApp')
.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {

	$locationProvider.hashPrefix('!');

	$routeProvider
	.when("/cars", {
		template: '<car-list></car-list>'
	})
	.when('/carsdetails', {
		template: '<car-details></car-details>'
	})
	.otherwise('/cars')
}

]);
