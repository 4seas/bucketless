app.controller('indexController', function ($scope, $location, $routeParams) {
	$scope.hello = 'hello';
	// $scope.checkLocation = function() {
	// 	console.log($location.path());
	// 	if ($location.path() == '/' || '/signup') {
	// 		$scope.header = false;
	// 	} else {
	// 		$scope.header = true;
	// 	}
	// 	console.log($scope.header);
	// 	return $scope.header;
	// }

	$scope.iconClass1 = $scope.iconClass2 = $scope.iconClass3 = "nav__icon";

	$scope.changeClass = function(iconIndex) {
		console.log("changeClass for " + iconIndex);
		if(iconIndex == 1) {
			$scope.iconClass1 = "nav__icon icon--circle";
			$scope.iconClass2 = $scope.iconClass3 = "nav__icon";
		}
		if(iconIndex == 2) {
			$scope.iconClass2 = "nav__icon icon--circle";
			$scope.iconClass1 = $scope.iconClass3 = "nav__icon";
		}
		if(iconIndex == 3) {
			$scope.iconClass3 = "nav__icon icon--circle";
			$scope.iconClass1 = $scope.iconClass2 = "nav__icon";
		}
	}
});

app.controller('signInCtrl', function ($scope, $location, $routeParams) {
	$scope.header = false;
});
