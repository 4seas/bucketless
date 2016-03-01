app.controller('collectionCtrl', function ($scope, $location, $routeParams) {
	$scope.header = true;
  $scope.collection = collections[$routeParams.id]
  $scope.title = $scope.collection.caption;
});
