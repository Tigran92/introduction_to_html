// team object
const team = {
// players property
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 21
    }
  ],
  // players property
  _games: [
    {
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
    }
  ],
  //Getter method for _players keys
  get players() {
       return this._players;
   },
   //Getter method for _games keys
   get games() {
       return this._games;
   },

   //addPlayer method
   addPlayer(firstName, lastName, age) {

     let player = {

       firstName: firstName,
       lastName: lastName,
       age: age
     };
      //add game info to games array property
      this.players.push(player);

   },
   //addGame method
   addGame(opponent, teamPoints, opponentPoints){

     let game = {

       opponent: opponent,
       teamPoints: teamPoints,
       opponentPoints: opponentPoints

     };
     //add game info to games array property
     this.games.push(game);
   },


};

//Calling addPlayer method
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

//Calling addGame method
team.addGame('Titans', 78, 92);
team.addGame('Lakers', 100, 98);
team.addGame('Bulls', 64, 85);

console.log(team.games);
