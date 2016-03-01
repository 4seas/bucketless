app.controller('profileCtrl', function ($scope, $location, $routeParams) {
	$scope.header = true;
	$scope.title = 'My Profile';
	$scope.date = Date.now();
	$scope.user = user[0];
	$scope.places = places;
});
