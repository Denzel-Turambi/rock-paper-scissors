// DATA MODEL
var playerSelection;
var computerSelection;
var weapons;
// QUERY SELECTORS
var classicGame = document.querySelector('#classic-game-selection');
var difficultGame = document.querySelector('#difficult-game-selection');
var gameSelection = document.querySelector('.game-selection');
var classicWeaponSelection = document.querySelector('.classic-mode');
var difficultWeaponSelection = document.querySelector('.difficult-mode');
var chosenWeapons = document.querySelector('.chosen-weapons');
var gameSubtitle = document.querySelector('.game-subtitle');
var weaponSubtitle = document.querySelector('.weapon-subtitle');
// Weapons:
var rock = document.querySelector('.rock');
rock.addEventListener('click', () => runComparison(rock));
var paper = document.querySelector('.paper');
paper.addEventListener('click', () => runComparison(paper));
var scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => runComparison(scissors));
var weaponChoice = document.querySelector('.weapons-wrapper');

// EVENT LISTENERS
classicGame.addEventListener('click', showClassicWeapons);
difficultGame.addEventListener('click', showDifficultWeapons);
weaponChoice.addEventListener('click', takeTurn);

// FUNCTIONS/EVENTS
function computerTurn() {
  var randomIndex = Math.floor(Math.random() * weapons.length);
  return weapons[randomIndex];
};

function takeTurn(playerSelection, computerSelection) {
  // playerSelection = rock
  // console.log(playerSelection);
  // if (playerSelection === computerSelection) {
  //   return `It's a tie`
  // }
};

function runComparison(weapon) {
  var computerWeapon = computerTurn();
  compare(weapon, computerWeapon);
  hide(classicWeaponSelection);
  var cloneWeapon = weapon.cloneNode(true);
  var cloneComputerWeapon = computerWeapon.cloneNode(true);
  chosenWeapons.appendChild(cloneWeapon);
  chosenWeapons.appendChild(cloneComputerWeapon);
  show(chosenWeapons);
  setTimeout(() => {
    hide(chosenWeapons);
    while (chosenWeapons.firstChild) {
      chosenWeapons.removeChild(chosenWeapons.firstChild);
  };
    show(classicWeaponSelection);
  }, 2000);
};

function compare(userWeapon, computerWeapon) {
  
}

function createPlayer(name, token, wins) {
  var player = {
    name: name || 'Link',
    token: token || './assets/TLoZ_Link_Sprite.webp',
    wins: wins || 0
  }
  return player;
};

function createGame(gameType) {
  var humanPlayer = createPlayer();
  var computerPlayer = createPlayer('Ganondorf', './assets/Ganon-ALTTP-Sprite.png', 0);
  var game = {
    humanPlayer: humanPlayer,
    computerPlayer: computerPlayer,
    gameType: gameType
  }
  return game;
};

function showClassicWeapons() {
  weapons = [rock, paper, scissors];
  hide(gameSelection);
  hide(gameSubtitle);
  show(classicWeaponSelection);
  show(weaponSubtitle);
  createGame(classicGame);
};

function showDifficultWeapons() {
  hide(gameSelection);
  hide(gameSubtitle);
  show(difficultWeaponSelection);
  show(weaponSubtitle);
  createGame(difficultGame);
};

function hide(element) {
  element.classList.add('hidden');
};

function show(element) {
  element.classList.remove('hidden');
};