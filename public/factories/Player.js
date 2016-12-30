var Player = function(){
  var self=this;
  var _grad = Math.PI / 180;
  self.vx=0;
  self.vy=0;
  self.rotation=0;

  self.config=function(){
    self.sprite.width=50;
    self.sprite.height=50;

    self.sprite.anchor.x=.5;
    self.sprite.anchor.y=.5;
  };

  self.setSprite=function(name){
    self.sprite = new PIXI.Sprite(PIXI.loader.resources[name].texture);
    self.config();
  };

  //Calcula trayectoria según radianes
  self.radianToDegree=function(radian){
    return (radian / Math.PI) * 180;
  };
  self.getTrajectoryX=function(){
    return Math.sin(self.radianToDegree(self.sprite.rotation) * _grad);
  };
  self.getTrajectoryY=function(){
    return Math.cos(self.radianToDegree(self.sprite.rotation) * _grad);
  };

  //Controls
  self.left = new Keyboard(37);
  self.right = new Keyboard(39);
  self.up = new Keyboard(38);
  self.down = new Keyboard(40);

  self.left.press=function(){
    self.rotation=-.2;
  };
  self.right.press=function(){
    self.rotation=.2;
  };
  self.up.press=function(){
    self.vx=self.getTrajectoryX();
    self.vy=-self.getTrajectoryY();
  };
  self.down.press=function(){
    self.vx=self.getTrajectoryX() * -1;
    self.vy=-self.getTrajectoryY() * -1;
  };

  self.left.release=function(){
    if(!self.right.isDown){
      self.rotation=0;
    }
  }
  self.right.release=function(){
    if(!self.left.isDown){
      self.rotation=0;
    }
  }
  self.up.release=function(){
    if(!self.down.isDown){
      self.vx=0;
      self.vy=0;
    }
  }
  self.down.release=function(){
    if(!self.up.isDown){
      self.vx=0;
      self.vy=0;
    }
  }

  return self;
}
