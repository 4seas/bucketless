var app = angular.module('iBucket', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/login/login.html',
		controller: 'signInCtrl'
	})
	.when('/signup', {
		templateUrl: 'templates/signup/signup.html',
		controller: 'signUpCtrl'
	})
	.when('/featured', {
		templateUrl: 'templates/featured/featured.html',
		controller: 'featureCtrl'
	})
	.when('/search', {
		templateUrl: 'templates/search/search.html',
		controller: 'searchCtrl'
	})
	.when('/profile', {
		templateUrl: 'templates/profile/profile.html',
		controller: 'profileCtrl'
	})
	.when('/cities/:id', {
		templateUrl: 'templates/city/city.html',
		controller: 'cityCtrl'
	})
	.when('/collection/:id', {
		templateUrl: 'templates/collection/collection.html',
		controller: 'collectionCtrl'
	})
	.when('/places/:id', {
		templateUrl: 'templates/detail/detail.html',
		controller: 'detailCtrl'
	});
	// .otherwise({redirectTo: '/'});

});
