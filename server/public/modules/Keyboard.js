module.exports = class Keyboard{
  constructor(keyCode){
    this.code = keyCode;
    this.isDown = false;
    this.isUp = true;
    this.press = undefined;
    this.release = undefined;

    window.addEventListener("keydown", this.downHandler.bind(this), false);
    window.addEventListener("keyup", this.upHandler.bind(this), false);
  }

  downHandler(event) {
    if (event.keyCode === this.code) {
      this.press();
      this.isDown = true;
      this.isUp = false;
    }
  }

  upHandler(event) {
    if (event.keyCode === this.code) {
      this.release();
      this.isDown = false;
      this.isUp = true;
    }
  }
}
