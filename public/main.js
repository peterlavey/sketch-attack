//Carga todos los recursos de la categoría player y para disponibilizar sus respectivas clases
const Loader = require('./utils/Loader');
const Game = require('./modules/Game');

//var loader = new Loader();
Loader.loadResources('players', init);

function init(){
  new Game();
}
