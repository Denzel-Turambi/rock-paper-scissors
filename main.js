// DATA MODEL
// QUERY SELECTORS
var classicGame = document.querySelector('#classic-game-selection');
var difficultGame = document.querySelector('#difficult-game-selection');
var gameSelection = document.querySelector('.game-selection');
var classicWeaponSelection = document.querySelector('.classic-mode');

// EVENT LISTENERS
classicGame.addEventListener('click', showWeapons);

// FUNCTIONS/EVENTS
function showWeapons() {
  gameSelection.classList.add('hidden');
  classicWeaponSelection.classList.remove('hidden');
}