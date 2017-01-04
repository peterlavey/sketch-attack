//Carga todos los recursos de la categoría player y para disponibilizar sus respectivas clases
const Loader = require('./utils/Loader');
const Stage = require('./factories/Stage');
const Ship = require('./factories/Ship');

//var loader = new Loader();
Loader.loadResource('players', init);

var stage = new Stage();
var player = new Ship();

function init(){
  player.setSprite('black');
  stage.addChild(player.sprite);
  engine();
}

function engine(){
  requestAnimationFrame(engine);
  player.update();

  stage.start();
}
