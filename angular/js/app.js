var app = angular.module('iBucket', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/login/index.html',
		controller: 'signInCtrl'
	})
	.when('/signup', {
		templateUrl: 'templates/signup/index.html',
		controller: 'signUpCtrl'
	})
	.when('/featured', {
		templateUrl: 'templates/featured/index.html',
		controller: 'featureCtrl'
	})
	.when('/search', {
		templateUrl: 'templates/search/index.html',
		controller: 'searchCtrl'
	})
	.when('/profile', {
		templateUrl: 'templates/profile/index.html',
		controller: 'profileCtrl'
	})
	.when('/places/:id', {
		templateUrl: 'templates/individual/index.html',
		controller: 'indivCtrl'
	});
	// .otherwise({redirectTo: '/'});
	
});
