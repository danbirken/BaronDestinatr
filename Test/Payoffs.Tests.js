module( "Payoffs" );
test( "existance", function() {
	ok(Payoffs);

	equal(Object.keys(Payoffs).length, 67)
});


test( "various payoffs", function() {

	//Randomly selected some from table at https://docs.google.com/spreadsheet/ccc?key=0Aqtfd6ldXtWFdFJWYUducEZBRWVWTFN1MnhXZktsTWc
	equal(Payoffs["New York"]["Los Angeles"], 31);
	equal(Payoffs["Chicago"]["Detroit"], 2.5)
	equal(Payoffs["Dallas"]["Seattle"], 24);
	equal(Payoffs["Los Angeles"]["St Louis"], 20.5);
	equal(Payoffs["Detroit"]["Memphis"], 7.5);
	equal(Payoffs["Atlanta"]["Minneapolis"], 11.5);
	equal(Payoffs["Portland, OR"]["Cleveland"], 25.5);
	equal(Payoffs["Miami"]["Atlanta"], 7)
	equal(Payoffs["Tampa"]["New Orleans"], 8);
	equal(Payoffs["Salt Lake City"]["Denver"], 5.5);
});

test( "payoffs are consistant", function() {
	//make sure the reverses always matches
	for(var origin in Payoffs)
	{
		for(var destination in Payoffs[origin])
		{
			equal(Payoffs[origin][destination], Payoffs[destination][origin], "Origin,Destination = " + origin +","+destination);
		}
	}
});