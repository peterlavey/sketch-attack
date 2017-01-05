const Keyboard = require('./Keyboard');
const Keyboard = require('./Player');

module.exports = class Tank extends Player{
  constructor(){
    super();
    this.grad = Math.PI / 180;
    const _left = new Keyboard(37);
    const _right = new Keyboard(39);
    const _up = new Keyboard(38);
    const _down = new Keyboard(40);

    _left.press=function(){
      this.vx=-5;
      this.vy=0;
    }.bind(this)

    _right.press=function(){
      this.vx=5;
      this.vy=0;
    }.bind(this)

    _up.press=function(){
      this.vx=0;
      this.vy=-5;
    }.bind(this)

    _down.press=function(){
      this.vx=0;
      this.vy=5;
    }.bind(this)

    _left.release=function(){
      if(!_right.isDown && this.vy === 0){
        this.vx=0;
      }
    }.bind(this)

    _right.release=function(){
      if(!_left.isDown && this.vy === 0){
        this.vx=0;
      }
    }.bind(this)

    _up.release=function(){
      if(!_down.isDown && this.vx === 0){
        this.vy=0;
      }
    }.bind(this)

    _down.release=function(){
      if(!_up.isDown && this.vx === 0){
        this.vy=0;
      }
    }.bind(this)

  }

  update(){
    this.sprite.x += this.vx;
    this.sprite.y += this.vy;
  }
}
