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
});

app.controller('signInCtrl', function ($scope, $location, $routeParams) {
	$scope.header = false;
});

app.controller('signUpCtrl', function ($scope, $location, $routeParams) {
	$scope.header = false;
});

app.controller('featureCtrl', function ($scope, $location, $routeParams) {
	$scope.header = true;
	$scope.title = 'Featured';
});

app.controller('searchCtrl', function ($scope, $location, $routeParams) {
	$scope.header = true;
	$scope.title = 'Search';
});

app.controller('profileCtrl', function ($scope, $location, $routeParams) {
	$scope.header = true;
	$scope.title = 'Profile';
});