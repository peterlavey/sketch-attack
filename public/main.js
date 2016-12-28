//Carga todos los recursos de la categoría player y para disponibilizar sus respectivas clases
Loader.load('players', init);

function init(){
  var player = new Player();
  var stage = new Stage();

  stage.addChild(player);
  stage.start();
}
