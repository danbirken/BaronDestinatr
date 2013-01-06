//Represents a player in the game
function PlayerVM(Name, Color)
{
	this.Name = ko.observable(Name);
	this.Color = ko.observable(Color);
	this.Home = ko.observable(null);
	this.Origin = ko.observable(null);
	this.Destination = ko.observable(null);
	

	this.Payout = ko.computed(
		function()
		{
			return null;
		}
	);
}