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

app.controller('indivCtrl', function ($scope, $http, $location, $routeParams){
	$scope.places = places;
	angular.forEach($scope.places, function(value, key){
		console.log('value is ' + value + ' key is ' + key);
		if(key + 1 == $routeParams.id) {
			$scope.place = value;
			$scope.title = $scope.place.name;
		}
	});
	console.log($scope.place);
	console.log($routeParams.id);
	
	// if (place.item)
	// $http.get('http://nicolevatland.com/angular/final/js/projects.json').success(function(data){
 //        angular.forEach(data, function(item) {
 //          if (item.id == $routeParams.id) {
 //            $scope.project = item;
 //        	console.log($scope.project);
 //        }
 //    });
 //    });
});

var user = [
	{
		name: 'Name',
		img: 'images/users/0/pic.jpg'
	}
];
var places = [
	{
		id: 1,
		name: 'Sky Diving',
		img: 'images/skydive.jpg'
	},
	{
		id: 2,
		name: 'Carnival',
		img: 'images/carnival.jpg'
	},
	{
		id: 3,
		name: 'Paris',
		img: 'images/places4.jpg'
	}
];