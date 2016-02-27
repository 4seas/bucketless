var app = angular.module('iBucket', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/login/index.html',
		controller: 'indexController'
	})
	.when('/signup', {
		templateUrl: 'templates/signup/index.html'
	})
	.when('/featured', {
		templateUrl: 'templates/featured/index.html'
	})
	.when('/search', {
		templateUrl: 'templates/search/index.html'
	})
	.when('/profile', {
		templateUrl: 'templates/profile/index.html'
	})
	.otherwise({redirectTo: '/'});
	
});
