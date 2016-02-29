app.controller('featureCtrl', function ($scope, $location, $routeParams) {
	$scope.header = true;
	$scope.title = 'Featured';
	$scope.cities = cities;
});
