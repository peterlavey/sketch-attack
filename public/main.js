//Carga todos los recursos de la categoría player y para disponibilizar sus respectivas clases
var loader = new Loader();
loader.loadResource('players', init);

var stage = new Stage();
var player = new Ship();

function init(){
  player.setSprite('black');
  stage.addChild(player.sprite);
  engine();
}

function engine(){
  requestAnimationFrame(engine);
  player.sprite.rotation += player.rotation;
  player.sprite.x += player.vx;
  player.sprite.y += player.vy;

  stage.start();
}
