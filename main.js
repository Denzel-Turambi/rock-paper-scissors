// DATA MODEL
// QUERY SELECTORS
var classicGame = document.querySelector('#classic-game-selection');
var difficultGame = document.querySelector('#difficult-game-selection');
var gameSelection = document.querySelector('.game-selection');
var classicWeaponSelection = document.querySelector('.classic-mode');
var difficultWeaponSelection = document.querySelector('.difficult-mode');
var gameSubtitle = document.querySelector('.game-subtitle');
var weaponSubtitle = document.querySelector('.weapon-subtitle');

// EVENT LISTENERS
classicGame.addEventListener('click', showClassicWeapons);
difficultGame.addEventListener('click', showDifficultWeapons);

// FUNCTIONS/EVENTS
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