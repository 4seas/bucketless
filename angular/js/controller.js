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
		long_name: 'Free Falling',
		img: 'images/skydive.jpg',
		desc: 'Artisan four dollar toast readymade, godard selfies VHS dreamcatcher PBR&B cred before they sold out ethical. Truffaut forage aesthetic leggings skateboard, celiac typewriter sartorial. Leggings neutra photo booth vegan synth. Butcher flannel readymade chicharrones kickstarter, +1 microdosing gochujang poutine crucifix meditation tumblr. Sriracha cardigan bespoke drinking vinegar selfies. Forage readymade kinfolk green juice plaid. Echo park tilde gastropub marfa letterpress heirloom brunch lomo, pitchfork jean shorts master cleanse yuccie hoodie ethical artisan.',
		people: [
			{
				img: 'images/people/jenni.jpg',
				name: 'Jenni',
				status: 'On list',
				distance: 2
			},
			{
				img: 'images/people/javier.png',
				name: 'Javier',
				status: 'Completed',
				distance: 2
			},
			{
				img: 'images/people/alex.png',
				name: 'Alex',
				status: 'On list',
				distance: 2
			},
			{
				img: 'images/people/gissele.png',
				name: 'Gissele',
				status: 'On list',
				distance: 2
			}
		],
		offers: [
			{
				img: 'images/offers/1.png',
				type: 'Offer',
				price: '180',
				name: 'Tour Rice'
			},
			{
				img: 'images/offers/2.png',
				type: 'Offer',
				price: '30',
				name: 'Fortune Teller'
			}

		]
	},
	{
		id: 2,
		name: 'Carnival',
		img: 'images/carnival.jpg',
		people: [
			{
				img: 'images/people/jenni.jpg',
				name: 'Jenni',
				status: 'On list',
				distance: 2
			},
			{
				img: 'images/people/javier.png',
				name: 'Javier',
				status: 'Completed',
				distance: 2
			},
			{
				img: 'images/people/alex.png',
				name: 'Alex',
				status: 'On list',
				distance: 2
			},
			{
				img: 'images/people/gissele.png',
				name: 'Gissele',
				status: 'On list',
				distance: 2
			}
		],
		offers: [
			{
				img: 'images/offers/1.png',
				type: 'Offer',
				price: '180',
				name: 'Tour Rice'
			},
			{
				img: 'images/offers/2.png',
				type: 'Offer',
				price: '30',
				name: 'Fortune Teller'
			}

		]
	},
	{
		id: 3,
		name: 'Paris',
		img: 'images/places4.jpg',
		people: [
			{
				img: 'images/people/jenni.jpg',
				name: 'Jenni',
				status: 'On list',
				distance: 2
			},
			{
				img: 'images/people/javier.png',
				name: 'Javier',
				status: 'Completed',
				distance: 2
			},
			{
				img: 'images/people/alex.png',
				name: 'Alex',
				status: 'On list',
				distance: 2
			},
			{
				img: 'images/people/gissele.png',
				name: 'Gissele',
				status: 'On list',
				distance: 2
			}
		],
		offers: [
			{
				img: 'images/offers/1.png',
				type: 'Offer',
				price: '180',
				name: 'Tour Rice'
			},
			{
				img: 'images/offers/2.png',
				type: 'Offer',
				price: '30',
				name: 'Fortune Teller'
			}

		]
	}
];