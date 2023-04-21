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
function showClassicWeapons() {
  gameSelection.classList.add('hidden');
  gameSubtitle.classList.add('hidden');
  classicWeaponSelection.classList.remove('hidden');
  weaponSubtitle.classList.remove('hidden');
}

function showDifficultWeapons() {
  gameSelection.classList.add('hidden');
  gameSubtitle.classList.add('hidden');
  difficultWeaponSelection.classList.remove('hidden');
  weaponSubtitle.classList.remove('hidden');
}
