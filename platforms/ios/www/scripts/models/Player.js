var Player = (function () {
    function Player(email, displayName, userName, playerId) {
        this.email = email;
        this.displayName = displayName;
        this.userName = userName;
        this.playerId = playerId;
    }
    Player.prototype.toString = function () {
        return "Player#" + this.playerId + ": " + this.displayName;
    };
    return Player;
})();
//# sourceMappingURL=Player.js.map