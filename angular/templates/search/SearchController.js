app.controller('searchCtrl', function ($scope, $location, $routeParams) {
	$scope.header = true;
	$scope.title = 'Search';
	$scope.collections = collections;
});

var collections =
[
	{
		id: 1,
		"caption":"Top 10 Things to Do",
		"image": "jumpcliff"
	},
	{
		id: 2,
		"caption": "2016 Popular Bucket Restaurants",
		"image": "restaurant"
	},
	{
		id: 3,
		"caption": "Top 5 Destinations",
		"image": "Paris"
	},
	{
		"caption": "Best Landmarks to See",
		"image": "pyramids"
	}
];
