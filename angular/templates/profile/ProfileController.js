app.controller('profileCtrl', function ($scope, $location, $routeParams) {
	$scope.header = true;
	$scope.title = 'My Profile';
	$scope.date = 'February 27, 2016'; //Date.now();
	$scope.user = user[0];
	$scope.places = places;

	$scope.doneList = [];
	$scope.wishList = [];

	for (var i in places) {
		var place = places[i];
		var peopleList = place.people;
		for (var j in peopleList) {
			var person = peopleList[j];
			if (person.name == 'Catherine') {
				if (person.status == 'On list') {
					$scope.wishList.push(place);
				} else if (person.status == 'Completed') {
					$scope.doneList.push(place);
				}
			}
		}
	}

	$scope.checkClicked = function() {
		$scope.clickedButton = 1;
		$scope.listStatusLabel = "Dreams accomplished";
		$scope.people = places.peopleDoneIt;
		$scope.byPersonPlaceStatus = 'Completed';
		$scope.activeList = $scope.doneList;
	};

	$scope.heartClicked = function() {
		$scope.clickedButton = 2;
		$scope.listStatusLabel = "On my Bucket List";
		$scope.people = places.peopleWantIt;
		$scope.byPersonPlaceStatus = 'On list';
		$scope.activeList = $scope.wishList;
	}

	$scope.checkClicked();

});
