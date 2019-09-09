let addKeyPair 
= function(keyName, value) {
  if (this[keyName] == undefined) {
  this[keyName] = value; }
  else {
    console.log(`the key "${keyName}" existed!`)
  }
}

// let game = {name:'war3',addKeyPair};
// game.addKeyPair('playTime', 20);
// game.addKeyPair('playTime', 40);
// console.log(game)

class Game {
    constructor(name) {
        this.name = name;
    }
    showAD(){
        console.log(`This! is! ${this.name}!!!`);
    }
}

// function Game(name){
//     this.name = name;
// }

let war3 = new Game("WarCraft 3");
// console.log(war3);
war3.showAD();

class PSGame extends Game {
    constructor(name, installStatus) {
        super(name);
        this.installStatus = installStatus;
    }
    static consoleAD(){
        console.log(`PlayStation4! with brand New TV!`);
    }
    showAD(){
        super.showAD();
    }
    showPSAD(){
        let installText = '';
        if (this.installStatus) {
            installText = "has been";
        }
        else {
            installText = "has NOT been"
        }
        console.log(`This game, ${this.name}, is a nice PS4 game. It ${installText} installed on my PS4.`)
    }
}

let overcooked = new PSGame("Overcooked", 1);
overcooked.showPSAD();