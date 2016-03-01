app.controller('detailCtrl', function ($scope, $http, $location, $routeParams){
	$scope.places = places;
	angular.forEach($scope.places, function(value, key){
		console.log('value is ' + value + ' key is ' + key);
		if(key + 1 == $routeParams.id) {
			$scope.place = value;
			$scope.title = $scope.place.name;
		}
	});

	$scope.checkClicked = function() {
		$scope.peopleLabel = "People that have done this...";
		$scope.people = places.peopleDoneIt;
		$scope.byPersonPlaceStatus = 'Completed';
	};

	$scope.heartClicked = function() {
		$scope.peopleLabel = "People who want to do this...";
		$scope.people = places.peopleWantIt;
		$scope.byPersonPlaceStatus = 'On list';
	}

	$scope.checkClicked();
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
