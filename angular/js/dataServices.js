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

var cities =
[
  {
		id: 1,
		"city": "London",
	  "description" : "London is the capital city of England and the United Kingdom. London has been a major settlement for centuries and affords its visitors great tourist attractions.",
	  "image": "https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/LONDON_shutterstock_229478404--tojpeg_1417791048879_x1.jpg",
	  "title_offer": "Go see the London Eye for half off!",
	  "offer_cost": "$15",
	  "image_offer": "http://cdn.londonandpartners.com/asset/20adda9d08e8480c6dbbfcf30fbcabdb.jpg"
  },

  {
		id: 2,
		"city": "Paris",
    "description": "Paris has always been one of the major tourist destinations in Europe. The city is situated on the banks of the Seine River and is one of the largest European capitals. The metropolitan area of the city is one of the most populated in Europe, about 11.5 million people live in it",
    "image": "https://www.eanamed.eu/images/Places/paris-6.jpg",
    "title_offer": "See the Louvre Museam museum for 30% off through thursday!",
    "offer_cost": "$12",
    "image_offer": "http://fasttravel.info/wp-content/uploads/2016/01/louvre-museum.jpg"
  },

	{
		id: 3,
		  "city": "Mexico City",
      "description": "the capital of México, very old, the worlds largest city, the financial, political and cultural center of México, the nightlife capital of México, one of the worlds great cities, huge, one of the world's most difficult cities to drive in, filled with exciting things to see and do, sinking, an energetic metropolis or just an incredible place to visit.",
      "image": "http://cdn1.theodysseyonline.com/files/2015/12/20/635862387549042491-673939441_Overview-of-Mexico-City-001.jpg",
      "title_offer": "This week only, $10 off admission to the Palacio de Bellas Artes",
      "offer_cost": "$5",
      "image_offer": "http://periodiconmx.com/wp-content/uploads/2015/06/bellas_artes_by_laloxxx-d3af398.jpg"
  },

	{
		id: 4,
		"city": "Tokyo",
    "description": "Tokyo is the capital of Japan and is located in the Kanto region of Central Honsu, next to Tokyo Bay. The city is located on a floodplain of three large rivers: the Sumida River, the Ara River and the Edo River. The Sumida River flows through the centre of the Metropolis and is integrated in the urban pattern of the city. The Edo River and the Ara River are located in the outer districts of Tokyo. Large parts of Tokyo are located below the flood level of its main rivers." ,
    "image":"https://ict.swisscom.ch/wp-content/uploads/2015/09/tokyo.jpg",
    "title_offer": "Get $20 in free pachinko credits when you spend $20 at pachinko central",
    "offer_cost": "$20",
    "image_offer": "https://upload.wikimedia.org/wikipedia/commons/2/2a/Electric_City_Akihabara_Pachinko.jpg"
  },
/*
	{
		"city": "Shanghai",
      "description": "Shanghai is a multi-cultural metropolis with both modern and traditional Chinese features. It is a great place to visit as it is a major party city with great attractions.",
      "image": "https://duranvirginia.files.wordpress.com/2014/09/virginia-duran-blog-sites-to-take-the-best-skyline-pictures-in-shanghai-the-bund.jpg",
      "title_offer" : "Buy one get one free boat ride through the 15th of March",
      "offer_cost": "$35.99",
      "image_offer": "http://www.tourschina.com/travel-shanghai/images/huangpu-river-cruise/5.jpg"
  },

	{
		"city": "Berlin",
       "description": "Berlin is the capital of Germany as well as the largest city in Germany. The top attractions to see are Pergamon Museaum, the Berlin Wall, and the Brandeburg Gate. ",
       "image": "https://gicsstudyabroadblog.files.wordpress.com/2012/06/shutterstock_103905527.jpg",
       "title_offer": "Get 50% off adult admission to the Pergamon Museaum when you purchase a child admission.",
       "offer_cost": "$25.00",
       "image_offer" : "http://farm3.static.flickr.com/2043/1900818253_634be1df7f_b.jpg"
     },

		 {
	 		"city": "Montreal",
       "description": "Montréal is the largest city in Québec. Predominantly French-speaking, Some of the top attractions in Montreal are Notre-Dame Basillica, the Bell Centre, and the Montreal Botanical Gardens.",
       "image": "https://samliuphotography.files.wordpress.com/2012/09/montreal.jpg",
       "title_offer": "Receive a voucher for free poutine at the Bell Centre with purchase of large Soda",
       "offer_cost": "$4.99",
       "image_offer": "http://hotcountry1035.com/wp-content/uploads/poutine.jpg"
     },

		 {
	 		"city": "Caracas",
        "description": "Caracas is the capital and largest city of Venezuela, the city of Caracas is known for gastronomical heritage due to its heavy influence of immigrants. Some of the top attractions in Venezuela are the Altamira Casino, Plaza Bolivar, and the Parque Central Complex",
        "image": "http://edu-geography.com/data_images/countries/caracas/caracas-09.jpg",
        "title_offer": "This week only, receive $10 in free slot play when you purchase $10",
        "offer_cost": "$10.00",
        "image_offer": "http://thekmagroup.com/test/wp-content/uploads/2014/11/Fort-Gibson-Casino_Interior-Casino-Design_Casino-Design_Casino-Development-1800x1200.jpg"
     },

		 {
	 		  "city": "Dallas",
        "description": "Dallas is a major city in Texas and the 4th largest in the United States. Some of the top things to do in Dallas are the Dr. Pepper Arena for a Stars game, the Texas School Book Depository, and the Dallas World Aquarium",
        "image": "http://www.lennar.com/images/com/images/new-homes/18/14/mhi/DallasSkyline21200X540opt.jpg",
        "title_offer": "Buy a 2-night stay at the Omni Dallas hotel by the 18th, get a third night free",
        "offer_cost": "$149",
        "image_offer": "https://www.google.com/search?q=dallas&biw=1153&bih=816&source=lnms&tbm=isch&sa=X&ved=0ahUKEwi-u4C39ZjLAhUI3mMKHXESAgEQ_AUICCgD&dpr=2#tbm=isch&q=dallas+hotel&imgrc=WROqq-2v6Zj2jM%3A"
     },
*/
		 {
			 id: 4,
	 		  "city": "New York",
        "description" : "New York City is the Capital city of New York State and is the most populated city in the United States. It is most of the most visited cities in the world. Some of most popular tourist attractions are Times Square, Rockefeller Center, Central Park, and the Guggenheim Museaum.",
        "image": "http://www.ssn.tv/wp-content/uploads/2014/07/NYC-1.jpg",
        "title_offer": "Buy one get one free admission to the Guggenheim Museaum.",
        "offer_cost": "$29.99",
        "image_offer": "http://res.cloudinary.com/dk/image/upload/q_80,c_fit,w_1200,h_630/new-york/solomon-guggenheim-museum.jpg"
     }

];

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
