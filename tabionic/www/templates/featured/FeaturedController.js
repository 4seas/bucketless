app.controller('featureCtrl', function ($scope, $location) {
	$scope.header = true;
	$scope.title = 'Featured';
	$scope.cities = cities;
	console.log("featureCtrl initialized");
});
