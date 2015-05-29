class Player {
	loggedInDate : Date;
  birthDate : Date;
	constructor(public email : string, public displayName : string, public userName : string,  public playerId : number) {}
	toString() : string {
		return "Player#" + this.playerId + ": " + this.displayName;
	}
}
