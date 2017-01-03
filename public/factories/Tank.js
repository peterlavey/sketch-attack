var Ship = function() {
  var self=this;

  self.leftPress=function(){
    self.parent.vx=-5;
    self.parent.vy=0;
  };
  self.rightPress=function(){
    self.parent.vx=5;
    self.parent.vy=0;
  };
  self.upPress=function(){
    self.parent.vx=0;
    self.parent.vy=-5;
  };
  self.downPress=function(){
    self.parent.vx=0;
    self.parent.vy=5;
  };

  self.leftRelease=function(){
    if(!self.parent.right.isDown && self.parent.vy === 0){
      self.parent.vx=0;
    }
  }
  self.rightRelease=function(){
    if(!self.parent.left.isDown && self.parent.vy === 0){
      self.parent.vx=0;
    }
  }
  self.upRelease=function(){
    if(!self.parent.down.isDown && self.parent.vx === 0){
      self.parent.vy=0;
    }
  }
  self.downRelease=function(){
    if(!self.parent.up.isDown && self.parent.vx === 0){
      self.parent.vy=0;
    }
  }
  return self;
};
