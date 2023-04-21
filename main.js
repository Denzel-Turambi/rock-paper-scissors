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
function createPlayer() {
  var player = {
    name: 'Link',
    token: '👩🏻',
    wins: 0
  }
  return player;
}

function showClassicWeapons() {
  hide(gameSelection);
  hide(gameSubtitle);
  show(classicWeaponSelection);
  show(weaponSubtitle);
};

function showDifficultWeapons() {
  hide(gameSelection);
  hide(gameSubtitle);
  show(difficultWeaponSelection);
  show(weaponSubtitle);
};

function hide(element) {
  element.classList.add('hidden');
}

function show(element) {
  element.classList.remove('hidden');
}