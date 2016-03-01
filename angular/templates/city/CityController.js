app.controller('cityCtrl', function ($scope, $location, $routeParams) {
	$scope.header = true;
  // $scope.cities = cities;
  $scope.city = cities[$routeParams.id]
});
