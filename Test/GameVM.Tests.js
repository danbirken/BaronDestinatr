module( "GameVM" );
test( "constructor", function() {
	ok(GameVM);

	var g = new GameVM(4);
	equal(g.PlayerCount(), 4);
	deepEqual(g.Players(), []);

	g = new GameVM();
  equal(g.PlayerCount(), 4); //default
  deepEqual(g.Players(), []);

  g = new GameVM(3);
  equal(g.PlayerCount(), 3);
  deepEqual(g.Players(), []);
});


test( "constructor invalid parameters", function() {
	
});

