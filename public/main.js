Loader.load('players', init);

function init(){
  var player = new Player();

  var renderer = PIXI.autoDetectRenderer(256, 256);
  document.body.appendChild(renderer.view);
  var stage = new PIXI.Container();
  stage.addChild(player);

  renderer.render(stage);
}
