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
var squirtle_Attack1_Damage = 24 - missingNo_Resist;
var squirtle_Attack1_PP = 20;
//Att 2
var squirtle_Attack2_Name = 'Water Gun';
var squirtle_Attack2_Damage = 27 - missingNo_Resist;
var squirtle_Attack2_PP = 7;
//Att 3
var squirtle_Attack3_Name = 'Hydro Pump';
var squirtle_Attack3_Damage = 50 - missingNo_Resist;
var squirtle_Attack3_PP = 3;

//charmander variables (Name, HP, Atatck Name, Damage, PP)
var charmander_Name = 'Charmander';
var charmander_Base_HP = 140;
/*var charmander_Weak = 'Water';
var charmander_Strong = 'Grass';*/
//charmander attack
var charmander_Attack1_Name = 'Scratch';
var charmander_Attack1_Damage = 24 - missingNo_Resist;
var charmander_Attack1_PP = 20;
//charmander attack
var charmander_Attack2_Name = 'Ember';
var charmander_Attack2_Damage = 30 - missingNo_Resist;
var charmander_Attack2_PP = 7;
//charmander attack
var charmander_Attack3_Name = 'Flamethrower';
var charmander_Attack3_Damage = 50 - missingNo_Resist;
var charmander_Attack3_PP = 3;

//bulbasaur variables (Name, HP, Attack Name, Damage, and PP)
var bulbasaur_Name = 'Bulbasaur';
var bulbasaur_Base_HP = 140;
/*var bulbasaur_Weak = 'Fire';
var bulbasaur_Strong = 'Water';*/
//bulbasaur attack
var bulbasaur_Attack1_Name = 'Tackle';
var bulbasaur_Attack1_Damage = 24 - missingNo_Resist;
var bulbasaur_Attack1_PP = 20;
//bulbasaur attack
var bulbasaur_Attack2_Name = 'Vine Whip';
var bulbasaur_Attack2_Damage = 30 - missingNo_Resist;
var bulbasaur_Attack2_PP = 7;
//bulbasaur attack
var bulbasaur_Attack3_Name = 'Seed Bomb';
var bulbasaur_Attack3_Damage = 60 - missingNo_Resist;
var bulbasaur_Attack3_PP = 3;

//MissingNo Vars (Name, HP, Attack Name, Damage, & PP)
var missingNo_Name = 'MissingNo.'
var missingNo_Base_HP = 140;
var missingNo_Resist = 15;

//MissingNo Attack
var missingNo_Attack1_Name = 'Null';
var missingNo_Attack1_Damage = 60;
var missingNo_Attack1_PP = 100;

//MissingNo Attack
var missingNo_Attack2_Name = '01010011 01110100 01110010 01101111 01101110 01100111';
var missingNo_Attack2_Damage = 90;
var missingNo_Attack2_PP = 100;

//MissingNo Attack
var missingNo_Attack3_Name = 'Death...';
var missingNo_Attack3_Damage = 140;
var missingNo_Attack3_PP = 1;

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
};

var fn3 = (function() {
  var first = true;
  return function() {
    first ? mute() : unmute();
    first = !first;
  }
})();

function unmute() {
  audio.volume = 1;
  document.getElementById('muteButton').innerHTML = 'Mute Music';
}

function mute() {
  audio.volume = 0;
  document.getElementById('muteButton').innerHTML = 'Unmute Music';
}

function playAud() {
  audio.play();
};

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

function pokemonSelectionFunc1() {
  pokemonSelection = 1;
  document.getElementById('startButton').disabled = false;
  document.getElementById('poke1').hidden = true;
  document.getElementById('poke2').hidden = true;
  document.getElementById('poke3').hidden = true;
}

function pokemonSelectionFunc2() {
  pokemonSelection = 2;
  document.getElementById('startButton').disabled = false;
  document.getElementById('poke1').hidden = true;
  document.getElementById('poke2').hidden = true;
  document.getElementById('poke3').hidden = true;
}

function pokemonSelectionFunc3() {
  pokemonSelection = 3;
  document.getElementById('startButton').disabled = false;
  document.getElementById('poke1').hidden = true;
  document.getElementById('poke2').hidden = true;
  document.getElementById('poke3').hidden = true;
}

function check() {

  if (userPokemonHP > maxUserHP) {
    userPokemonHP = maxUserHP;
  };
  
  var barWPercentage = Math.round((userPokemonHP / 140) * 100); var barWString = barWPercentage + '%';document.getElementById('playerHealth').style.width = barWString;

  document.getElementById('playerHealth').title = userPokemonHP;
  document.getElementById('enemyHealth').title = enemyPokemonHP;
  
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

  if (enemyPokemonHP <= 0) {
    document.getElementById('coin').hidden = false;
    replay()
  } else if (userPokemonHP <= 0) {
    document.getElementById('playerHealth').style.width = '0%';
    replay()
  }
  runCheat()
}

function activateButtons() {
  document.getElementById('poke1').disabled = false;
  document.getElementById('poke2').disabled = false;
  document.getElementById('poke3').disabled = false;
}

function enemyAttack() {
  var enemyChoiceAttack = Math.floor(Math.random() * 9);

  if (enemyChoiceAttack === 0 || 1 || 2 && enemyPokemonHP > 0) {
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
  } else if (enemyChoiceAttack === 0 || 1 || 2 && enemyPokemonMove1PP === 0) {
    setTimeout(() => {
      check();
    }, 250);
  } else if (enemyChoiceAttack === 3 || 4 || 5 && enemyPokemonHP > 0) {
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
  } else if (enemyChoiceAttack === 3 || 4 || 5 && enemyPokemonMove2PP === 0) {
    setTimeout(() => {
      check();
    }, 250);
  } else if (enemyChoiceAttack === 6 || 7 || 8 && enemyPokemonHP > 0) {
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
  } else if (enemyChoiceAttack === 6 || 7 || 8 && enemyPokemonMove3PP === 0) {
    setTimeout(() => {
      check();
    }, 250);
  };
  runCheat()
};

function pokeMove1() {
  if (userPokemonMove1PP > 0) {
    var attDmg = userPokemonMove1Damage;
    userPokemonMove1PP -= 1;
    enemyPokemonHP -= attDmg;
    var barWPercentage = Math.round((enemyPokemonHP / 140) * 100);
    var barWString = barWPercentage + '%';
    document.getElementById('enemyHealth').style.width = barWString;
    document.getElementById('pokeMove1').disabled = true;
    document.getElementById('pokeMove2').disabled = true;
    document.getElementById('pokeMove3').disabled = true;
    setTimeout(() => {
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
      enemyAttack();
    }, 2000);
    setTimeout(() => {
      check();
    }, 250);
  }
  runCheat()
}

function pokeMove2() {
  if (userPokemonMove2PP > 0) {
    var attDmg = userPokemonMove2Damage;
    userPokemonMove2PP -= 1;
    enemyPokemonHP -= attDmg;
    var barWPercentage = Math.round((enemyPokemonHP / 140) * 100);
    var barWString = barWPercentage + '%';
    document.getElementById('enemyHealth').style.width = barWString;
    document.getElementById('pokeMove1').disabled = true;
    document.getElementById('pokeMove2').disabled = true;
    document.getElementById('pokeMove3').disabled = true;
    setTimeout(() => {
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
      enemyAttack();
    }, 2000);
    setTimeout(() => {
      check();
    }, 250);
  }
  runCheat()
}

function pokeMove3() {
  if (userPokemonMove3PP > 0) {
    var attDmg = userPokemonMove3Damage;
    userPokemonMove3PP -= 1;
    enemyPokemonHP -= attDmg;
    var barWPercentage = Math.round((enemyPokemonHP / 140) * 100);
    var barWString = barWPercentage + '%';
    document.getElementById('enemyHealth').style.width = barWString;
    document.getElementById('pokeMove1').disabled = true;
    document.getElementById('pokeMove2').disabled = true;
    document.getElementById('pokeMove3').disabled = true;
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
      enemyAttack();
    }, 2000);
    setTimeout(() => {
      check();
    }, 250);
  }
  runCheat()
}

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
  //////////Main Code//////////
  document.getElementById('playerPoke').hidden = false;
  document.getElementById('enemyPoke').hidden = false;
  document.getElementById('startButton').hidden = true;
  document.getElementById('playerHealth').hidden = false;
  document.getElementById('playerHealthBG').hidden = false;
  document.getElementById('enemyHealth').hidden = false;
  document.getElementById('enemyHealthBG').hidden = false;
  document.getElementById('revealItems').disabled = false;

  var playing = true;
};

function playerPokemonAssign() {
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
  //all pokemon iable assignments if a certain number is chosen. ex: the number 1 is equal to bulbasaur
  if (pokeOpponent === 1) {
    enemyPokemonName = missingNo_Name;
    enemyPokemonHP = parseInt(missingNo_Base_HP);
    enemyPokemonResist = missingNo_Resist;
    
    enemyPokemonMove1 = missingNo_Attack1_Name;
    enemyPokemonMove1Damage = missingNo_Attack1_Damage;
    enemyPokemonMove1PP = missingNo_Attack1_PP;
    
    enemyPokemonMove2 = missingNo_Attack2_Name;
    enemyPokemonMove2Damage = missingNo_Attack2_Damage;
    enemyPokemonMove2PP = missingNo_Attack2_PP;
    
    enemyPokemonMove3 = missingNo_Attack3_Name;
    enemyPokemonMove3Damage = missingNo_Attack3_Damage;
    enemyPokemonMove3PP = missingNo_Attack3_PP;

    document.getElementById('enemyPoke').src = "./Images/EnemyPoke/MissingNo.png"
  };
};

var cheatCode

function cheats() {
  cheatCode = window.prompt('Type In Your Cheat Code');
  if (cheatCode === "InfHealth" || "InfPP" || "OneShot" || "Wide~" || "Tall~" || "Challenge") {
    runCheat();
  };
};

function runCheat() {
  if (cheatCode === "InfHealth") {
    maxUserHP = 999999999;
    userPokemonHP = maxUserHP;
    document.getElementById('playerHealth').style.width = 0 + "%";
  } else if (cheatCode === "InfPP") {
    maxMove1PP = 999999999;
    maxMove2PP = 999999999;
    maxMove3PP = 999999999;
    userPokemonMove1PP = maxMove1PP;
    userPokemonMove2PP = maxMove2PP;
    userPokemonMove3PP = maxMove3PP;
  } else if (cheatCode === "OneShot") {
    userPokemonMove1Damage = 99999999;
    userPokemonMove2Damage = 99999999;
    userPokemonMove3Damage = 99999999;
  } else if (cheatCode === "Wide~") {
    document.getElementById('playerPoke').style.width = 200 + "%";
    document.getElementById('enemyPoke').style.width = 200 + "%";
  } else if (cheatCode === "Tall~") {
    document.getElementById('playerPoke').style.height = 1000 + "%";
    document.getElementById('enemyPoke').style.height = 1000 + "%";
  };
};