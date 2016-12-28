var Stage = function(){
  this.renderer = PIXI.autoDetectRenderer(256, 256);
  document.body.appendChild(this.renderer.view);
  this.stage = new PIXI.Container();
  this.addChild=function(element){
    this.stage.addChild(element);
  };
  this.start=function(){
    this.renderer.render(this.stage);
  };
}
