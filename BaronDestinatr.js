//Represents a player in the game
function PlayerVM(Name, Color)
{
	var self = this;

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
			if(self.Origin() != null && self.Destination() != null)
			{
					return Payoffs[self.Origin()][self.Destination()];
			}
			else
			{
				return null;
			}
		}
	);
}


//Represents a Game
function GameVM(PlayerCount)
{
	var self = this;
	if(PlayerCount == null) PlayerCount = 4; //default 
	this.PlayerCount = ko.observable(PlayerCount);
	
	this.Players = ko.observableArray();

	this.Start = function()
	{
		for(var i = 0, l = self.PlayerCount();i<l; i++)
		{
			self.Players.push( new PlayerVM("Player " + (i+1), "Color") );
		}
	};
}


