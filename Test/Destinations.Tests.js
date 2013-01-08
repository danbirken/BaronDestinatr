module( "Destinations" );
test( "existance", function() {
	ok(Destinations);

	equal(Object.keys(Destinations).length, 8)
});

test( "regions", function() {

	//based on tables at https://docs.google.com/spreadsheet/ccc?key=0AocDmydhOGwvdE5ZUnY1aVJGRTRNS0YyUEowM3hESnc
	var r = Destinations.Regions;
	ok(r);
	equal(Object.keys(r).length, 2)
	
	var odd = r.Odd;
	ok(odd);
	equal(odd.length, 13);
	equal(odd[02], "Plains");
	equal(odd[03], "SouthEast");
	equal(odd[04], "SouthEast");
	equal(odd[05], "SouthEast");
	equal(odd[06], "NorthCentral");
	equal(odd[07], "NorthCentral");
	equal(odd[08], "NorthEast");
	equal(odd[09], "NorthEast");
	equal(odd[10], "NorthEast");
	equal(odd[11], "NorthEast");
	equal(odd[12], "NorthEast");


	var even = r.Even;
	ok(even);
	equal(even.length, 13)
	equal(even[02], "SouthWest");
	equal(even[03], "SouthCentral");
	equal(even[04], "SouthCentral");
	equal(even[05], "SouthCentral");
	equal(even[06], "SouthWest");
	equal(even[07], "SouthWest");
	equal(even[08], "Plains");
	equal(even[09], "NorthWest");
	equal(even[10], "NorthWest");
	equal(even[11], "Plains");
	equal(even[12], "NorthWest");
});



test( "SouthEast", function() {

	//based on tables at https://docs.google.com/spreadsheet/ccc?key=0AocDmydhOGwvdE5ZUnY1aVJGRTRNS0YyUEowM3hESnc
	var r = Destinations.SouthEast;
	ok(r);
	equal(Object.keys(r).length, 2)
	
	var odd = r.Odd;
	ok(odd);
	equal(odd.length, 13);
	equal(odd[02], "Charlotte");
	equal(odd[03], "Charlotte");
	equal(odd[04], "Chattanooga");
	equal(odd[05], "Atlanta");
	equal(odd[06], "Atlanta");
	equal(odd[07], "Atlanta");
	equal(odd[08], "Richmond");
	equal(odd[09], "Knoxville");
	equal(odd[10], "Mobile");
	equal(odd[11], "Knoxville");
	equal(odd[12], "Mobile");


	var even = r.Even;
	ok(even);
	equal(even.length, 13)
	equal(even[02], "Norfolk");
	equal(even[03], "Norfolk");
	equal(even[04], "Norfolk");
	equal(even[05], "Charleston");
	equal(even[06], "Miami");
	equal(even[07], "Jacksonville");
	equal(even[08], "Miami");
	equal(even[09], "Tampa");
	equal(even[10], "Tampa");
	equal(even[11], "Mobile");
	equal(even[12], "Norfolk");
});


test( "Plains", function() {

	//based on tables at https://docs.google.com/spreadsheet/ccc?key=0AocDmydhOGwvdE5ZUnY1aVJGRTRNS0YyUEowM3hESnc
	var r = Destinations.Plains;
	ok(r);
	equal(Object.keys(r).length, 2)
	
	var odd = r.Odd;
	ok(odd);
	equal(odd.length, 13);
	equal(odd[02], "Kansas City");
	equal(odd[03], "Kansas City");
	equal(odd[04], "Denver");
	equal(odd[05], "Denver");
	equal(odd[06], "Denver");
	equal(odd[07], "Kansas City");
	equal(odd[08], "Kansas City");
	equal(odd[09], "Kansas City");
	equal(odd[10], "Pueblo");
	equal(odd[11], "Pueblo");
	equal(odd[12], "Oklahoma City");


	var even = r.Even;
	ok(even);
	equal(even.length, 13)
	equal(even[02], "Oklahoma City");
	equal(even[03], "St Paul");
	equal(even[04], "Minneapolis");
	equal(even[05], "St Paul");
	equal(even[06], "Minneapolis");
	equal(even[07], "Oklahoma City");
	equal(even[08], "Des Moines");
	equal(even[09], "Omaha");
	equal(even[10], "Omaha");
	equal(even[11], "Fargo");
	equal(even[12], "Fargo");
})

test( "NorthCentral", function() {

	//based on tables at https://docs.google.com/spreadsheet/ccc?key=0AocDmydhOGwvdE5ZUnY1aVJGRTRNS0YyUEowM3hESnc
	var r = Destinations.NorthCentral;
	ok(r);
	equal(Object.keys(r).length, 2)
	
	var odd = r.Odd;
	ok(odd);
	equal(odd.length, 13);
	equal(odd[02], "Cleveland");
	equal(odd[03], "Cleveland");
	equal(odd[04], "Cleveland");
	equal(odd[05], "Cleveland");
	equal(odd[06], "Detroit");
	equal(odd[07], "Detroit");
	equal(odd[08], "Indianapolis");
	equal(odd[09], "Milwaukee");
	equal(odd[10], "Milwaukee");
	equal(odd[11], "Chicago");
	equal(odd[12], "Milwaukee");


	var even = r.Even;
	ok(even);
	equal(even.length, 13)
	equal(even[02], "Cincinnati");
	equal(even[03], "Chicago");
	equal(even[04], "Cincinnati");
	equal(even[05], "Cincinnati");
	equal(even[06], "Columbus");
	equal(even[07], "Chicago");
	equal(even[08], "Chicago");
	equal(even[09], "St Louis");
	equal(even[10], "St Louis");
	equal(even[11], "St Louis");
	equal(even[12], "Chicago");
})

test( "NorthEast", function() {

	//based on tables at https://docs.google.com/spreadsheet/ccc?key=0AocDmydhOGwvdE5ZUnY1aVJGRTRNS0YyUEowM3hESnc
	var r = Destinations.NorthEast;
	ok(r);
	equal(Object.keys(r).length, 2)
	
	var odd = r.Odd;
	ok(odd);
	equal(odd.length, 13);
	equal(odd[02], "New York");
	equal(odd[03], "New York");
	equal(odd[04], "New York");
	equal(odd[05], "Albany");
	equal(odd[06], "Boston");
	equal(odd[07], "Buffalo");
	equal(odd[08], "Boston");
	equal(odd[09], "Portland, ME");
	equal(odd[10], "New York");
	equal(odd[11], "New York");
	equal(odd[12], "New York");


	var even = r.Even;
	ok(even);
	equal(even.length, 13)
	equal(even[02], "New York");
	equal(even[03], "Washington");
	equal(even[04], "Pittsburgh");
	equal(even[05], "Pittsburgh");
	equal(even[06], "Philadelphia");
	equal(even[07], "Washington");
	equal(even[08], "Philadelphia");
	equal(even[09], "Baltimore");
	equal(even[10], "Baltimore");
	equal(even[11], "Baltimore");
	equal(even[12], "New York");
})

test( "SouthWest", function() {

	//based on tables at https://docs.google.com/spreadsheet/ccc?key=0AocDmydhOGwvdE5ZUnY1aVJGRTRNS0YyUEowM3hESnc
	var r = Destinations.SouthWest;
	ok(r);
	equal(Object.keys(r).length, 2)
	
	var odd = r.Odd;
	ok(odd);
	equal(odd.length, 13);
	equal(odd[02], "San Diego");
	equal(odd[03], "San Diego");
	equal(odd[04], "Reno");
	equal(odd[05], "San Diego");
	equal(odd[06], "Sacramento");
	equal(odd[07], "Las Vegas");
	equal(odd[08], "Phoenix");
	equal(odd[09], "El Paso");
	equal(odd[10], "Tucumcari");
	equal(odd[11], "Phoenix");
	equal(odd[12], "Phoenix");


	var even = r.Even;
	ok(even);
	equal(even.length, 13)
	equal(even[02], "Los Angeles");
	equal(even[03], "Oakland");
	equal(even[04], "Oakland");
	equal(even[05], "Oakland");
	equal(even[06], "Los Angeles");
	equal(even[07], "Los Angeles");
	equal(even[08], "Los Angeles");
	equal(even[09], "San Francisco");
	equal(even[10], "San Francisco");
	equal(even[11], "San Francisco");
	equal(even[12], "San Francisco");
})

test( "SouthCentral", function() {

	//based on tables at https://docs.google.com/spreadsheet/ccc?key=0AocDmydhOGwvdE5ZUnY1aVJGRTRNS0YyUEowM3hESnc
	var r = Destinations.SouthCentral;
	ok(r);
	equal(Object.keys(r).length, 2)
	
	var odd = r.Odd;
	ok(odd);
	equal(odd.length, 13);
	equal(odd[02], "Memphis");
	equal(odd[03], "Memphis");
	equal(odd[04], "Memphis");
	equal(odd[05], "Little Rock");
	equal(odd[06], "New Orleans");
	equal(odd[07], "Birmingham");
	equal(odd[08], "Louisville");
	equal(odd[09], "Nashville");
	equal(odd[10], "Nashville");
	equal(odd[11], "Louisville");
	equal(odd[12], "Memphis");


	var even = r.Even;
	ok(even);
	equal(even.length, 13)
	equal(even[02], "Shreveport");
	equal(even[03], "Shreveport");
	equal(even[04], "Dallas");
	equal(even[05], "New Orleans");
	equal(even[06], "Dallas");
	equal(even[07], "San Antonio");
	equal(even[08], "Houston");
	equal(even[09], "Houston");
	equal(even[10], "Ft Worth");
	equal(even[11], "Ft Worth");
	equal(even[12], "Ft Worth");
})

test( "NorthWest", function() {

	//based on tables at https://docs.google.com/spreadsheet/ccc?key=0AocDmydhOGwvdE5ZUnY1aVJGRTRNS0YyUEowM3hESnc
	var r = Destinations.NorthWest;
	ok(r);
	equal(Object.keys(r).length, 2)
	
	var odd = r.Odd;
	ok(odd);
	equal(odd.length, 13);
	equal(odd[02], "Spokane");
	equal(odd[03], "Spokane");
	equal(odd[04], "Seattle");
	equal(odd[05], "Seattle");
	equal(odd[06], "Seattle");
	equal(odd[07], "Seattle");
	equal(odd[08], "Rapid City");
	equal(odd[09], "Casper");
	equal(odd[10], "Billings");
	equal(odd[11], "Billings");
	equal(odd[12], "Spokane");


	var even = r.Even;
	ok(even);
	equal(even.length, 13)
	equal(even[02], "Spokane");
	equal(even[03], "Salt Lake City");
	equal(even[04], "Salt Lake City");
	equal(even[05], "Salt Lake City");
	equal(even[06], "Portland, OR");
	equal(even[07], "Portland, OR");
	equal(even[08], "Portland, OR");
	equal(even[09], "Pocatello");
	equal(even[10], "Butte");
	equal(even[11], "Butte");
	equal(even[12], "Portland, OR");
})