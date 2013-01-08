module( "PlayerVM" );
test( "constructor", function() {
	ok(PlayerVM);

	var p = new PlayerVM("Name", "Color");
	equal(p.Name(), "Name");
	equal(p.Color(), "Color");
	equal(p.Home(), null);
	equal(p.Origin(), null);
	equal(p.Destination(), null);
	equal(p.Payout(), null);

	ok(ko.isComputed(p.Payout));
});


test( "Payouts", function() {
	ok(PlayerVM);

	var p = new PlayerVM("Name", "Color");
	equal(p.Name(), "Name");
	equal(p.Color(), "Color");
	equal(p.Home(), null);

	//special case no destination
	p.Origin("Detroit");
	equal(p.Payout(), null);

	p.Destination("Memphis");
	equal(p.Payout(), 7.5);

	//unsetting
	p.Destination(null);
	equal(p.Payout(), null);


	p.Origin("New York");
	p.Destination("Los Angeles");
	equal(p.Payout(), 31);


	p.Origin("Chicago");
	p.Destination("Detroit");
	equal(p.Payout(), 2.5);
	

	p.Origin("Dallas");
	p.Destination("Seattle");
	equal(p.Payout(), 24);


	p.Origin("Los Angeles");
	p.Destination("St Louis");
	equal(p.Payout(), 20.5);


	p.Origin("Portland, OR");
	p.Destination("Cleveland");
	equal(p.Payout(), 25.5);	

});


