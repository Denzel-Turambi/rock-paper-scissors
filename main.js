// DATA MODEL
var weapons;
var userWins = 0;
var computerWins = 0;
var gameChoice;
// QUERY SELECTORS
var classicGame = document.querySelector('#classic-game-selection');
var difficultGame = document.querySelector('#difficult-game-selection');
var gameSelection = document.querySelector('.game-selection');
var classicWeaponSelection = document.querySelector('.classic-mode');
var difficultWeaponSelection = document.querySelector('.difficult-mode');
var changeGameButton = document.querySelector('.change-game-button');
var chosenWeapons = document.querySelector('.chosen-weapons');
var gameSubtitle = document.querySelector('.game-subtitle');
var weaponSubtitle = document.querySelector('.weapon-subtitle');
var subtitleSection = document.querySelector('.subtitles');
var resultStatement = document.querySelector('.result-subtitle');
var userWinCount = document.querySelector('.user-win-count');
var computerWinCount = document.querySelector('.computer-win-count');
// WEAPONS
var rocks = document.querySelectorAll('.rock');
var rock1= rocks[0];
rock1.addEventListener('click', () => takeTurn(rock1));
var rock2 = rocks[1];
rock2.addEventListener('click', () => takeTurn(rock2));
var papers = document.querySelectorAll('.paper');
var paper1 = papers[0];
paper1.addEventListener('click', () => takeTurn(paper1));
var paper2 = papers[1];
paper2.addEventListener('click', () => takeTurn(paper2));
var scissors = document.querySelectorAll('.scissors');
var scissors1 = scissors[0];
scissors1.addEventListener('click', () => takeTurn(scissors1));
var scissors2 = scissors[1];
scissors2.addEventListener('click', () => takeTurn(scissors2));
var triforce = document.querySelector('.tri-force');
triforce.addEventListener('click', () => takeTurn(triforce));
var sword = document.querySelector('.sword');
sword.addEventListener('click', () => takeTurn(sword));

// EVENT LISTENERS
classicGame.addEventListener('click', showClassicWeapons);
difficultGame.addEventListener('click', showDifficultWeapons);
changeGameButton.addEventListener('click', changeGameMode);

// FUNCTIONS/EVENTS
function computerTurn() {
  var randomIndex = Math.floor(Math.random() * weapons.length);
  return weapons[randomIndex];
};

function takeTurn(weapon) {
  var gameWeaponSelection = gameChoice === 'classic' ? classicWeaponSelection : difficultWeaponSelection;
  var computerWeapon = computerTurn();
  hide(gameWeaponSelection);

  var cloneWeapon = weapon.cloneNode(true);
  var cloneComputerWeapon = computerWeapon.cloneNode(true);
  chosenWeapons.appendChild(cloneWeapon);
  chosenWeapons.appendChild(cloneComputerWeapon);
  show(chosenWeapons);

  var compareResult = compare(weapon, computerWeapon);
  hide(weaponSubtitle);
  resultStatement.innerText = compareResult
  show(resultStatement);
  
  setTimeout(() => {
    hide(chosenWeapons);
    while (chosenWeapons.firstChild) {
      chosenWeapons.removeChild(chosenWeapons.firstChild);
    };
    show(gameWeaponSelection);
    hide(resultStatement);
    show(weaponSubtitle);
  }, 2000);
};

function compare(userWeapon, computerWeapon) {
  var userWeaponName = userWeapon.getAttribute('data-name');
  var computerWeaponName = computerWeapon.getAttribute('data-name');
  if (userWeaponName === computerWeaponName) {
    return "It's a draw!"
  } else if ((userWeaponName === 'rock' && (computerWeaponName === 'scissors' || computerWeaponName === 'triforce'))
  || (userWeaponName === 'scissors' && (computerWeaponName === 'paper' || computerWeaponName === 'triforce'))
  || (userWeaponName === 'paper' && (computerWeaponName === 'rock' || computerWeaponName === 'sword'))
  || (userWeaponName === 'triforce' && (computerWeaponName === 'paper' || computerWeaponName === 'sword'))
  || (userWeaponName === 'sword' && (computerWeaponName === 'scissors' || computerWeaponName === 'rock'))) {
    userWins += 1;
    userWinCount.innerText = `Wins: ${userWins}`
    return 'You won!'
  } 
  computerWins += 1;
  computerWinCount.innerText = `Wins: ${computerWins}`
  return 'You lost!'
};

function createPlayer(name, token, wins) {
  var player = {
    name: name || 'Link',
    token: token || './assets/TLoZ_Link_Sprite.webp',
    wins: wins || 0
  }
  return player;
};

function createGame(gameType) {
  var humanPlayer = createPlayer('Link', './assets/TLoZ_Link_Sprite.webp', userWins);
  var computerPlayer = createPlayer('Ganondorf', './assets/Ganon-ALTTP-Sprite.png', computerWins);
  var game = {
    humanPlayer: humanPlayer,
    computerPlayer: computerPlayer,
    gameType: gameType
  }
  console.log(game);
  return game.gameType;
};

function showClassicWeapons() {
  weapons = [rock1, paper1, scissors1];
  gameChoice = createGame('classic');
  hide(gameSelection);
  hide(gameSubtitle);
  show(classicWeaponSelection);
  show(weaponSubtitle);
  show(changeGameButton);
};

function showDifficultWeapons() {
  weapons = [rock2, paper2, scissors2, triforce, sword];
  gameChoice = createGame('difficult');
  hide(gameSelection);
  hide(gameSubtitle);
  show(difficultWeaponSelection);
  show(weaponSubtitle);
  show(changeGameButton);
};

function changeGameMode () {
  hide(changeGameButton);
  hide(weaponSubtitle);
  show(gameSelection);
  show(gameSubtitle);
  if (gameChoice === 'classic') {
    hide(classicWeaponSelection);
  }
  hide(difficultWeaponSelection);
};

function hide(element) {
  element.classList.add('hidden');
};

function show(element) {
  element.classList.remove('hidden');
};