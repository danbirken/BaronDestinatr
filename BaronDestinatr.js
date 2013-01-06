//Represents a player in the game
function PlayerVM(Name, Color)
{
	//the name of the player
	this.Name = ko.observable(Name);

	//The color of the player
	this.Color = ko.observable(Color);
	
	//the home city of the player
	this.Home = ko.observable(null);

	//The origin of the player's current trip
	this.Origin = ko.observable(null);

	//the destination of player's current trip
	this.Destination = ko.observable(null);
	

	this.Payout = ko.computed(
		function()
		{
			return null;
		}
	);
}


//Represents a Game
function GameVM(PlayerCount)
{
	if(PlayerCount == null) PlayerCount = 4; //default 
	this.PlayerCount = ko.observable(PlayerCount);
	this.Players = ko.observableArray();
}

