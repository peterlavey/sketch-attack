//Carga todos los recursos de la categoría player y para disponibilizar sus respectivas clases
Loader.load('players', init);

var stage = new Stage();
var player = new Player();

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
