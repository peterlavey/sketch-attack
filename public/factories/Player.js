var Player = function(){
  this.sprite = new PIXI.Sprite(PIXI.loader.resources['weasel'].texture);
  return this.sprite;
}
