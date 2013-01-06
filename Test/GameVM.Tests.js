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

//TODO: test invalid constructor params

test( "Start Game", function() {
	var g = new GameVM(4);
	equal(g.PlayerCount(), 4);
	deepEqual(g.Players(), []);

	g.Start();
	var players = g.Players();
	equal(players.length, 4);
	equal(players[0].Name(), "Player 1");
	equal(players[1].Name(), "Player 2");
	equal(players[2].Name(), "Player 3");
	equal(players[3].Name(), "Player 4");

	//TODO: add checks for new colors
	equal(players[0].Color(), "Color");
	equal(players[1].Color(), "Color");
	equal(players[2].Color(), "Color");
	equal(players[3].Color(), "Color");

});
