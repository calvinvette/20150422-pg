angular.module("tApp").service("UserRegistrationService", function($rootScope) {
  console.log("UserRegistrationService loaded");
  $rootScope.$on("UserRegistrationEvent", function(evt, player) {
    console.log("UserRegistration Event");
    player.password = null; // TODO remove password for local storage for now, encrypt later
    window.localStorage.setItem("player", JSON.stringify(player));
  });

  this.getPlayer = function() {
    var wlsPlayer = window.localStorage.getItem("player");
    if (wlsPlayer) {
      player = JSON.parse(wlsPlayer);
      return player;
    } else {
      return null;
    }
  };
});
// window.localStorage.setItem("player", JSON.stringify(player));
