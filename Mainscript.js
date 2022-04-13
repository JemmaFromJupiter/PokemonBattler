/////////User Pokemon Declarations/////////
let pokemonSelection = 0;

var maxUserHP = 140;

var userPokemonName
var userPokemonHP

var userPokemonMove1
var userPokemonMove1Damage
var userPokemonMove1PP
var maxMove1PP = 20;

var userPokemonMove2
var userPokemonMove2Damage
var userPokemonMove2PP
var maxMove2PP = 7;

var userPokemonMove3
var userPokemonMove3Damage
var userPokemonMove3PP
var maxMove3PP = 3;

/////////Enemy Pokemon Declarations/////////
var enemyPokemonName
var enemyPokemonHP

var enemyPokemonMove1
var enemyPokemonMove1Damage
var enemyPokemonMove1PP

var enemyPokemonMove2
var enemyPokemonMove2Damage
var enemyPokemonMove2PP

var enemyPokemonMove3
var enemyPokemonMove3Damage
var enemyPokemonMove3PP

//////Pokemon Stats//////
var balancerDamage = Math.floor(Math.random() * 20);

//Squirtle variables (Name, HP, Atatck Name, Damage, PP)
var squirtle_Name = "Squirtle";
var squirtle_Base_HP = 140;
/*var squirtle_Weak = 'Electric';
var squirtle_Strong = 'Fire';*/
//Att 1
var squirtle_Attack1_Name = 'Tackle';
var squirtle_Attack1_Damage = 24 - balancerDamage;
var squirtle_Attack1_PP = 20;
//Att 2
var squirtle_Attack2_Name = 'Water Gun';
var squirtle_Attack2_Damage = 27 - balancerDamage;
var squirtle_Attack2_PP = 7;
//Att 3
var squirtle_Attack3_Name = 'Hydro Pump';
var squirtle_Attack3_Damage = 50 - balancerDamage;
var squirtle_Attack3_PP = 3;

//charmander variables (Name, HP, Atatck Name, Damage, PP)
var charmander_Name = 'Charmander';
var charmander_Base_HP = 140;
/*var charmander_Weak = 'Water';
var charmander_Strong = 'Grass';*/
//charmander attack
var charmander_Attack1_Name = 'Scratch';
var charmander_Attack1_Damage = 24 - balancerDamage;
var charmander_Attack1_PP = 20;
//charmander attack
var charmander_Attack2_Name = 'Ember';
var charmander_Attack2_Damage = 30 - balancerDamage;
var charmander_Attack2_PP = 7;
//charmander attack
var charmander_Attack3_Name = 'Flamethrower';
var charmander_Attack3_Damage = 50 - balancerDamage;
var charmander_Attack3_PP = 3;

//bulbasaur variables (Name, HP, Attack Name, Damage, and PP)
var bulbasaur_Name = 'Bulbasaur';
var bulbasaur_Base_HP = 140;
/*var bulbasaur_Weak = 'Fire';
var bulbasaur_Strong = 'Water';*/
//bulbasaur attack
var bulbasaur_Attack1_Name = 'Tackle';
var bulbasaur_Attack1_Damage = 24 - balancerDamage;
var bulbasaur_Attack1_PP = 20;
//bulbasaur attack
var bulbasaur_Attack2_Name = 'Vine Whip';
var bulbasaur_Attack2_Damage = 30 - balancerDamage;
var bulbasaur_Attack2_PP = 7;
//bulbasaur attack
var bulbasaur_Attack3_Name = 'Seed Bomb';
var bulbasaur_Attack3_Damage = 69 - balancerDamage;
var bulbasaur_Attack3_PP = 3;

var pokeOpponent = 1;

var healthPotions = 10;
var hpRestore = 55;

var ppPotions = 5;
var ppRestore1 = 10;
var ppRestore2 = 5;
var ppRestore3 = 2;

var playing = false;
//The Music Playing in The page variable Connection
var audio = document.getElementById('audioID')

/////////Functions/////////

//pokemon restore HP Potion
function restoreHP() {
  userPokemonHP += hpRestore;
  healthPotions -= 1;
  check();
    setTimeout(() => {document.getElementById('item1').disabled = true; document.getElementById('item2').disabled = true; showHideItems();}, 100)
    setTimeout(() => {document.getElementById('item1').disabled = false; document.getElementById('item2').disabled = false;}, 5000)
}

//Restore PP to the pokemon after PP UP use, restoring by specified values (10, 5, 2)
function restorePP() {
  userPokemonMove1PP += ppRestore1;
  userPokemonMove2PP += ppRestore2;
  userPokemonMove3PP += ppRestore3;
  if (userPokemonMove1PP > maxMove1PP) {
    userPokemonMove1PP = maxMove1PP;
  }
  if (userPokemonMove2PP > maxMove2PP) {
    userPokemonMove2PP = maxMove2PP;
  }
  if (userPokemonMove3PP > maxMove3PP) {
    userPokemonMove3PP = maxMove3PP;
  }
  ppPotions -= 1;
  setTimeout(() => {check();}, 500)
  setTimeout(() => {document.getElementById('item1').disabled = true; document.getElementById('item2').disabled = true; showHideItems();}, 100);
  setTimeout(() => {document.getElementById('item1').disabled = false; document.getElementById('item2').disabled = false;}, 5000)
}

//A function that can activate twice. muting and unmuting music.
var fn3 = (function() {
  var first = true;
  return function() {
    first ? mute() : unmute();
    first = !first;
  }
})();

//sets the volume of the pages hidden audio element to 1, A.K.A unmuting it. this also changes the text of the Button to "Mute Music"
function unmute() {
  audio.volume = 1;
  document.getElementById('muteButton').innerHTML = 'Mute Music';
}

//sets the volume of the pages hidden audio element to 0, A.K.A muting it. this also changes the text of the Button to "Unmute Music"
function mute() {
  audio.volume = 0;
  document.getElementById('muteButton').innerHTML = 'Unmute Music';
}

//Plays the audio after the pages "Start" Button is clicked
function playAud() {
  audio.play();
};

//A multiple use function that on the click of a button it swaps between the Item Menu being Hidden and Unhidden
var showHideItems = (function() {
  var one = true;
  return function() {
    one ? showItemsList() : hideItemsList();
    one = !one;
  }
})();

function showItemsList() {
  document.getElementById('itemDiv').hidden = false;
};
function hideItemsList() {
  document.getElementById('itemDiv').hidden = true;
};

//sets the users pokemon to charmander, and disables the pokemon selection function, enables the start
function pokemonSelectionFunc1() {
  pokemonSelection = 1;
  document.getElementById('startButton').disabled = false;
  document.getElementById('poke1').disabled = true;
  document.getElementById('poke2').disabled = true;
  document.getElementById('poke3').disabled = true;
}

//sets the users pokemon to bulbasaur, and disables the pokemon selection function, enables the start
function pokemonSelectionFunc2() {
  pokemonSelection = 2;
  document.getElementById('startButton').disabled = false;
  document.getElementById('poke1').disabled = true;
  document.getElementById('poke2').disabled = true;
  document.getElementById('poke3').disabled = true;
}

//sets the users pokemon to charmander, and disables the pokemon selection function, enables the start
function pokemonSelectionFunc3() {
  pokemonSelection = 3;
  document.getElementById('startButton').disabled = false;
  document.getElementById('poke1').disabled = true;
  document.getElementById('poke2').disabled = true;
  document.getElementById('poke3').disabled = true;
}

//does a check on multiple things
function check() {
//this checks if the health of the user pokemon is over 140, if it is it sets it to the maximum HP (140)
  if (userPokemonHP > maxUserHP) {
    userPokemonHP = maxUserHP;
  };

  //sets the PlayerHP to always be the percentage as the number, eg. if HP === 28 the healthbar width will be set to 20% of the div.
  var barWPercentage = Math.round((userPokemonHP / 140) * 100); var barWString = barWPercentage + '%';document.getElementById('playerHealth').style.width = barWString;

  //A tool tip to tell you how much health the pokemon has, if hovered over the HP element
  document.getElementById('playerHealth').title = userPokemonHP;
  document.getElementById('enemyHealth').title = enemyPokemonHP;

  //disables the move buttons for the enemy attack, and restores one pp so the enemy can switch by only ONE VALUE (Charmander to bulbasaur and bulbasaur to squirtle, instead of charmander to squirtle to win)
  if (userPokemonMove1PP === 0 && enemyPokemonHP <= 0) {
    document.getElementById('pokeMove1').disabled = true;
    userPokemonMove1PP = 1;
  } else if (userPokemonMove2PP === 0 && enemyPokemonHP <= 0) {
    document.getElementById('pokeMove2').disabled = true;
    userPokemonMove2PP = 1;
  } else if (userPokemonMove3PP === 0 && enemyPokemonHP <= 0) {
    document.getElementById('pokeMove3').disabled = true;
    userPokemonMove3PP = 1;
  }
//moves to the next enemy pokemon and sets the healthbar to their current health after respawn
  if (enemyPokemonHP < 0) {
    document.getElementById('enemyHealth').style.width = '0%';
    setTimeout(() => {
      pokeOpponent += 1;
      enemyPokemonHP = 1;
      setTimeout(() => {
        enemyPokemonAssign();
        var barWPercentage = Math.round((enemyPokemonHP / 140) * 100); var barWString = barWPercentage + '%';document.getElementById('enemyHealth').style.width = barWString;
      }, 750);
    }, 1000);
  };

  //if the pokeOpponent value is over 3, allow the player to play again
  if (pokeOpponent > 3) {
    document.getElementById('coin').hidden = false;
    replay()
  } else if (userPokemonHP <= 0) {
    //if the player dies, set the healthbar to zero and allow them to replay the game
    document.getElementById('playerHealth').style.width = '0%';
    replay()
  }
  //always checks if there is a cheat code activated
  runCheat()
}

//Enemy Attack Function
function enemyAttack() {
  //picks a random number between 0 and 3
  var enemyChoiceAttack = Math.floor(Math.random() * 3);

  if (enemyChoiceAttack === 0 && enemyPokemonHP > 0) {
    //if the attack choice equals 0, run attack 1
    var eAttDmg = enemyPokemonMove1Damage;
    enemyPokemonMove1PP -= 1;
    userPokemonHP -= eAttDmg;
    var barWPercentage = Math.round((userPokemonHP / 140) * 100);
    var barWString = barWPercentage + '%';
    document.getElementById('playerHealth').style.width = barWString;
    document.getElementById('pokeMove1').disabled = false;
    document.getElementById('pokeMove2').disabled = false;
    document.getElementById('pokeMove3').disabled = false;
    setTimeout(() => {
      check();
    }, 250);
  } else if (enemyChoiceAttack === 0 && enemyPokemonMove1PP === 0){
    //run the check function and nothing else, because the pokemon doesnt have enough PP
    setTimeout(() => {
      check();
    }, 250);
  } else if (enemyChoiceAttack === 1 && enemyPokemonHP > 0) {
    //if the enemyAttack Choice equals 1, do the attack two of the current pokemon
    var eAttDmg = enemyPokemonMove2Damage;
    enemyPokemonMove2PP -= 1;
    userPokemonHP -= eAttDmg;
    var barWPercentage = Math.round((userPokemonHP / 140) * 100);
    var barWString = barWPercentage + '%';
    document.getElementById('playerHealth').style.width = barWString;
    document.getElementById('pokeMove1').disabled = false;
    document.getElementById('pokeMove2').disabled = false;
    document.getElementById('pokeMove3').disabled = false;
    setTimeout(() => {
      check();
    }, 250);
  } else if (enemyChoiceAttack === 1 && enemyPokemonMove2PP === 0){
    //run the check function and nothing else, because the pokemon doesnt have enough PP
    setTimeout(() => {
      check();
    }, 250);
  } else if (enemyChoiceAttack === 2 && enemyPokemonHP > 0) {
    //if the enemyAttack Choice equals 2, do the attack three of the current pokemon
    var eAttDmg = enemyPokemonMove3Damage;
    enemyPokemonMove3PP -= 1;
    userPokemonHP -= eAttDmg;
    var barWPercentage = Math.round((userPokemonHP / 140) * 100);
    var barWString = barWPercentage + '%';
    document.getElementById('playerHealth').style.width = barWString;
    document.getElementById('pokeMove1').disabled = false;
    document.getElementById('pokeMove2').disabled = false;
    document.getElementById('pokeMove3').disabled = false;
    setTimeout(() => {
      check();
    }, 250);
  } else if (enemyChoiceAttack === 2 && enemyPokemonMove3PP === 0){
    //run the check function and nothing else, because the pokemon doesnt have enough PP
    setTimeout(() => {
      check();
    }, 250);
  };
  runCheat()
};

//pokemon Attack 1 function
function pokeMove1() {
  if (userPokemonMove1PP > 0) {
    //if the player pokemons PP > 0, set attack damage, decrement the PP by 1, and subtract the attack damage from the enemy pokemons health
    var attDmg = userPokemonMove1Damage;
    userPokemonMove1PP -= 1;
    enemyPokemonHP -= attDmg;
    //sets the healthbar width depanding on the pokemons current health of the pokemon, Uses percentages
    var barWPercentage = Math.round((enemyPokemonHP / 140) * 100);
    var barWString = barWPercentage + '%';
    document.getElementById('enemyHealth').style.width = barWString;
    document.getElementById('pokeMove1').disabled = true;
    document.getElementById('pokeMove2').disabled = true;
    document.getElementById('pokeMove3').disabled = true;
    setTimeout(() => {
      //run the check and enemy attack functions
      enemyAttack();
    }, 2000);
    setTimeout(() => {
      check();
    }, 250);
  }
  if (userPokemonMove1PP <= 0 && enemyPokemonHP > 1) {
    document.getElementById('pokeMove1').disabled = true;
    document.getElementById('pokeMove2').disabled = true;
    document.getElementById('pokeMove3').disabled = true;
    setTimeout(() => {
      //run the check and enemy attack functions only, because the pokemon doesnt have enough PP
      enemyAttack();
    }, 2000);
    setTimeout(() => {
      check();
    }, 250);
  }
  runCheat()
}

function pokeMove2() {
  //if the player pokemons PP > 0, set attack damage, decrement the PP by 1, and subtract the attack damage from the enemy pokemons health
  if (userPokemonMove2PP > 0) {
    var attDmg = userPokemonMove2Damage;
    userPokemonMove2PP -= 1;
    enemyPokemonHP -= attDmg;
    //sets the healthbar width depanding on the pokemons current health of the pokemon, Uses percentages
    var barWPercentage = Math.round((enemyPokemonHP / 140) * 100);
    var barWString = barWPercentage + '%';
    document.getElementById('enemyHealth').style.width = barWString;
    document.getElementById('pokeMove1').disabled = true;
    document.getElementById('pokeMove2').disabled = true;
    document.getElementById('pokeMove3').disabled = true;
    setTimeout(() => {
      //run the check and enemy attack functions
      enemyAttack();
    }, 2000);
    setTimeout(() => {
      check();
    }, 250);
  }
  if (userPokemonMove2PP <= 0 && enemyPokemonHP > 1) {
    document.getElementById('pokeMove1').disabled = true;
    document.getElementById('pokeMove2').disabled = true;
    document.getElementById('pokeMove3').disabled = true;
    setTimeout(() => {
      //run the check and enemy attack functions only, because the pokemon doesnt have enough PP
      enemyAttack();
    }, 2000);
    setTimeout(() => {
      check();
    }, 250);
  }
  runCheat()
}

function pokeMove3() {
  //if the player pokemons PP > 0, set attack damage, decrement the PP by 1, and subtract the attack damage from the enemy pokemons health
  if (userPokemonMove3PP > 0) {
    var attDmg = userPokemonMove3Damage;
    userPokemonMove3PP -= 1;
    enemyPokemonHP -= attDmg;
    //sets the healthbar width depanding on the pokemons current health of the pokemon, Uses percentages
    var barWPercentage = Math.round((enemyPokemonHP / 140) * 100);
    var barWString = barWPercentage + '%';
    document.getElementById('enemyHealth').style.width = barWString;
    document.getElementById('pokeMove1').disabled = true;
    document.getElementById('pokeMove2').disabled = true;
    document.getElementById('pokeMove3').disabled = true;
    //run the check and enemy attack functions
    setTimeout(() => {
      enemyAttack();
    }, 2000);
    setTimeout(() => {
      check();
    }, 250);
  }
  if (userPokemonMove3PP <= 0 && enemyPokemonHP > 1) {
    document.getElementById('pokeMove1').disabled = true;
    document.getElementById('pokeMove2').disabled = true;
    document.getElementById('pokeMove3').disabled = true;
    setTimeout(() => {
      //run the check and enemy attack functions only, because the pokemon doesnt have enough PP
      enemyAttack();
    }, 2000);
    setTimeout(() => {
      check();
    }, 250);
  }
  runCheat()
}

//disables, enables, hides and unhides numerous elements, shows the replay button
function replay() {
  document.getElementById('replay').hidden = false;
  document.getElementById('pokeMove1').disabled = true;
  document.getElementById('pokeMove2').disabled = true;
  document.getElementById('pokeMove3').disabled = true;
  document.getElementById('revealItems').disabled = true;
  document.getElementById('playerPoke').hidden = true;
  document.getElementById('enemyPoke').hidden = true;
  document.getElementById('playerHealth').hidden = true;
  document.getElementById('playerHealthBG').hidden = true;
  document.getElementById('enemyHealth').hidden = true;
  document.getElementById('enemyHealthBG').hidden = true;
  document.getElementById('itemDiv').hidden = true;
}

function playGame() {
  //disables the start button and also unhides the player pokemon and enemy pokemon sprites, also unhides the player and enemy health Background and bar and enables the Items Button.
  document.getElementById('playerPoke').hidden = false;
  document.getElementById('enemyPoke').hidden = false;
  document.getElementById('startButton').disabled = true;
  document.getElementById('playerHealth').hidden = false;
  document.getElementById('playerHealthBG').hidden = false;
  document.getElementById('enemyHealth').hidden = false;
  document.getElementById('enemyHealthBG').hidden = false;
  document.getElementById('revealItems').disabled = false;
};

function playerPokemonAssign() {
  //depending on the players choice, the pokemon sprite and stats are chosen based off of the button pressed.
  if (pokemonSelection === 1) {
    userPokemonName = charmander_Name;
    userPokemonHP = charmander_Base_HP;
    /* userPokemonWeakness = charmander_Weak;
    userPokemonStrong = charmander_Strong;*/

    userPokemonMove1 = charmander_Attack1_Name;
    userPokemonMove1Damage = charmander_Attack1_Damage;
    userPokemonMove1PP = charmander_Attack1_PP;

    userPokemonMove2 = charmander_Attack2_Name;
    userPokemonMove2Damage = charmander_Attack2_Damage;
    userPokemonMove2PP = charmander_Attack2_PP;

    userPokemonMove3 = charmander_Attack3_Name;
    userPokemonMove3Damage = charmander_Attack3_Damage;
    userPokemonMove3PP = charmander_Attack3_PP;
    document.getElementById('playerPoke').src = "./Images/PlayerPoke/PlayerChar.gif"
    document.getElementById('pokeMove1').disabled = false;
    document.getElementById('pokeMove2').disabled = false;
    document.getElementById('pokeMove3').disabled = false;
  } else if (pokemonSelection === 2) {
    userPokemonName = bulbasaur_Name;
    userPokemonHP = bulbasaur_Base_HP;
    /* userPokemonWeakness = bulbasaur_Weak;
    userPokemonStrong = bulbasaur_Strong;*/

    userPokemonMove1 = bulbasaur_Attack1_Name;
    userPokemonMove1Damage = bulbasaur_Attack1_Damage;
    userPokemonMove1PP = bulbasaur_Attack1_PP;

    userPokemonMove2 = bulbasaur_Attack2_Name;
    userPokemonMove2Damage = bulbasaur_Attack2_Damage;
    userPokemonMove2PP = bulbasaur_Attack2_PP;

    userPokemonMove3 = bulbasaur_Attack3_Name;
    userPokemonMove3Damage = bulbasaur_Attack3_Damage;
    userPokemonMove3PP = bulbasaur_Attack3_PP;
    document.getElementById('playerPoke').src = "./Images/PlayerPoke/PlayerBulb.gif"
    document.getElementById('pokeMove1').disabled = false;
    document.getElementById('pokeMove2').disabled = false;
    document.getElementById('pokeMove3').disabled = false;
  } else if (pokemonSelection === 3) {
    userPokemonName = squirtle_Name;
    userPokemonHP = squirtle_Base_HP;
    /* userPokemonWeakness = squirtle_Weak;
    userPokemonStrong = squirtle_Strong;*/

    userPokemonMove1 = squirtle_Attack1_Name;
    userPokemonMove1Damage = squirtle_Attack1_Damage;
    userPokemonMove1PP = squirtle_Attack1_PP;

    userPokemonMove2 = squirtle_Attack2_Name;
    userPokemonMove2Damage = squirtle_Attack2_Damage;
    userPokemonMove2PP = squirtle_Attack2_PP;

    userPokemonMove3 = squirtle_Attack3_Name;
    userPokemonMove3Damage = squirtle_Attack3_Damage;
    userPokemonMove3PP = squirtle_Attack3_PP;
    document.getElementById('playerPoke').src = "./Images/PlayerPoke/PlayerSquirt.png"
    document.getElementById('pokeMove1').disabled = false;
    document.getElementById('pokeMove2').disabled = false;
    document.getElementById('pokeMove3').disabled = false;
  };

  document.getElementById('pokeMove1').innerHTML = userPokemonMove1;
  document.getElementById('pokeMove2').innerHTML = userPokemonMove2;
  document.getElementById('pokeMove3').innerHTML = userPokemonMove3;
};

function enemyPokemonAssign() {
  //all pokemon iable assignments if a certain number is chosen. ex: the number 2 is equal to bulbasaur
  if (pokeOpponent === 1) {
    enemyPokemonName = charmander_Name;
    enemyPokemonHP = charmander_Base_HP;
    /* enemyPokemonWeakness = charmander_Weak;
    enemyPokemonStrong = charmander_Strong;*/

    enemyPokemonMove1 = charmander_Attack1_Name;
    enemyPokemonMove1Damage = charmander_Attack1_Damage;
    enemyPokemonMove1PP = charmander_Attack1_PP;

    enemyPokemonMove2 = charmander_Attack2_Name;
    enemyPokemonMove2Damage = charmander_Attack2_Damage;
    enemyPokemonMove2PP = charmander_Attack2_PP;

    enemyPokemonMove3 = charmander_Attack3_Name;
    enemyPokemonMove3Damage = charmander_Attack3_Damage;
    enemyPokemonMove3PP = charmander_Attack3_PP;
    document.getElementById('enemyPoke').src = "./Images/EnemyPoke/OppChar.gif"
  } else if (pokeOpponent === 2) {
    enemyPokemonName = bulbasaur_Name;
    enemyPokemonHP = bulbasaur_Base_HP;
    /* enemyPokemonWeakness = bulbasaur_Weak;
    enemyPokemonStrong = bulbasaur_Strong;*/

    enemyPokemonMove1 = bulbasaur_Attack1_Name;
    enemyPokemonMove1Damage = bulbasaur_Attack1_Damage;
    enemyPokemonMove1PP = bulbasaur_Attack1_PP;

    enemyPokemonMove2 = bulbasaur_Attack2_Name;
    enemyPokemonMove2Damage = bulbasaur_Attack2_Damage;
    enemyPokemonMove2PP = bulbasaur_Attack2_PP;

    enemyPokemonMove3 = bulbasaur_Attack3_Name;
    enemyPokemonMove3Damage = bulbasaur_Attack3_Damage;
    enemyPokemonMove3PP = bulbasaur_Attack3_PP;
    document.getElementById('enemyPoke').src = "./Images/EnemyPoke/OppBulb.gif"
  } else if (pokeOpponent === 3) {
    enemyPokemonName = squirtle_Name;
    enemyPokemonHP = squirtle_Base_HP;
    /* enemyPokemonWeakness = squirtle_Weak;
    enemyPokemonStrong = squirtle_Strong;*/

    enemyPokemonMove1 = squirtle_Attack1_Name;
    enemyPokemonMove1Damage = squirtle_Attack1_Damage;
    enemyPokemonMove1PP = squirtle_Attack1_PP;

    enemyPokemonMove2 = squirtle_Attack2_Name;
    enemyPokemonMove2Damage = squirtle_Attack2_Damage;
    enemyPokemonMove2PP = squirtle_Attack2_PP;

    enemyPokemonMove3 = squirtle_Attack3_Name;
    enemyPokemonMove3Damage = squirtle_Attack3_Damage;
    enemyPokemonMove3PP = squirtle_Attack3_PP;
    document.getElementById('enemyPoke').src = "./Images/EnemyPoke/OppSquirt.gif"
  };
};



///////VERY BUGGY, NOT RECCOMENDED TO USE IF YOU WANT A GOOD EXPERIENCE//////

//sets a var for the cheat codes string
var cheatCode = '';

//call function to prompt the user for cheatcodes
function cheats() {
  var yesNo
  //asks if the user wishes to ruin the game
  yesNo = window.confirm('Cheats Are Experimental And May Make The Game Buggy! Do You Want To Continue?')
  if (yesNo) {
    //gives the user a window prompt to input the correct code if they answer yes to the question above
    cheatCode = window.prompt('Type In Your Cheat Code: You May Only Have 1 Active At A Time');
    runCheat();
  };
};

//Call Function to run Cheat Code
function runCheat() {
  if (cheatCode === "InfHealth") {
    //set players MAX HP to a high value every function ran
    maxUserHP = 999999999;
    //set the userPokemonHP to the MAX HP
    userPokemonHP = maxUserHP;
    //always set the playerHP width to 0%
    document.getElementById('playerHealth').style.width = 0 + "%";
  } else if (cheatCode === "InfPP") {
    //set all PP values to VERY high values
    maxMove1PP = 999999999999;
    maxMove2PP = 999999999999;
    maxMove3PP = 999999999999;
    userPokemonMove1PP = maxMove1PP;
    userPokemonMove2PP = maxMove2PP;
    userPokemonMove3PP = maxMove3PP;
  } else if (cheatCode === "OneShot") {
    //set The users damage for all attacks to a high value to completely get rid of the enemies healthbar
    userPokemonMove1Damage = 99999999;
    userPokemonMove2Damage = 99999999;
    userPokemonMove3Damage = 99999999;
  } else if (cheatCode === "Wide~") {
    //sets the width of both pokemon to 200% of the div
    document.getElementById('playerPoke').style.width = 200 + "%";
    document.getElementById('enemyPoke').style.width = 200 + "%";
  } else if (cheatCode === "Tall~") {
    //sets the height of each pokemon to 1000% of the div
    document.getElementById('playerPoke').style.height = 1000 + "%";
    document.getElementById('enemyPoke').style.height = 1000 + "%";
  } else if (cheatCode === "01010011 01100101 01100011 01110010 01100101 01110100") {
    //Figure this one out
    location.replace('./ZSecret2.html');
  } else if (cheatCode != "InfHealth" || "InfPP" || "OneShot" || "Wide~" || "Tall" || "01010011 01100101 01100011 01110010 01100101 01110100") {
    //if there is no code, or the code input is not any of the valid codes, print an error
    console.log('Invalid/No Code Input Into Console')
    console.log(Error)
    cheatCode = '';
  }
};