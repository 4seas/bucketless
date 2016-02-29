app.controller('profileCtrl', function ($scope, $location, $routeParams) {
	$scope.header = true;
	$scope.title = 'My Profile';
	$scope.date = Date.now();
	$scope.user = user[0];
	$scope.places = places;
});

var user = [
	{
		name: 'Catherine',
		location: 'Irvine, California, USA',
		img: 'images/people/gissele.png'
	},
	{
		name: 'Alex',
		location: 'San Diego, California, USA',
		img: 'images/people/alex.png'
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
				img: 'images/people/alex.png',
				name: 'Adam',
				status: 'Completed',
				distance: 2
			},
			{
				img: 'images/people/gissele.png',
				name: 'Mindy',
				status: 'On list',
				distance: 2
			},
			{
				img: 'images/people/jenni.jpg',
				name: 'Lucy',
				status: 'On list',
				distance: 2
			},
			{
				img: 'images/people/javier.png',
				name: 'Alexander',
				status: 'Completed',
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
