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
	$scope.title = 'My Profile';
	$scope.date = Date.now();
	$scope.user = user[0];
	$scope.places = places;
});

var user = [
	{
		name: 'Name',
		img: 'images/users/0/pic.jpg'
	}
];
var places = [
	{
		name: 'place name',
		img: 'images/places4.jpg'
	},
	{
		name: 'place name',
		img: 'images/places5.jpg'
	},
	{
		name: 'place name',
		img: 'images/places4.jpg'
	}
]