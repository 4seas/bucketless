app.controller('cityCtrl', function ($scope, $location, $routeParams) {
	$scope.header = true;
  $scope.city = cities[$routeParams.id]
  $scope.title = $scope.city.city;
});
