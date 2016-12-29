var Player = function(){
  var self=this;
  self.vx=0;
  self.vy=0;

  self.setSprite=function(name){
    self.sprite = new PIXI.Sprite(PIXI.loader.resources[name].texture);
  };

  //Controls
  self.left = new Keyboard(37);
  self.right = new Keyboard(39);
  self.up = new Keyboard(38);
  self.down = new Keyboard(40);

  self.left.press=function(){
    self.vx=-5;
    self.vy=0;
  };
  self.right.press=function(){
    self.vx=5;
    self.vy=0;
  };
  self.up.press=function(){
    self.vx=0;
    self.vy=-5;
  };
  self.down.press=function(){
    self.vx=0;
    self.vy=5;
  };

  self.left.release=function(){
    if(!self.right.isDown && self.vy === 0){
      self.vx=0;
    }
  }
  self.right.release=function(){
    if(!self.left.isDown && self.vy === 0){
      self.vx=0;
    }
  }
  self.up.release=function(){
    if(!self.down.isDown && self.vx === 0){
      self.vy=0;
    }
  }
  self.down.release=function(){
    if(!self.up.isDown && self.vx === 0){
      self.vy=0;
    }
  }

  return self;
}
