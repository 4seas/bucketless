app.controller('cityCtrl', function ($scope, $location, $stateParams) {
	$scope.header = true;
  $scope.city = cities[$stateParams.chatId];
  $scope.title = $scope.city.city;
	console.log("cityCtrl initialized");
});
