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


