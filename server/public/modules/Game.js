const Stage = require('./Stage');
const EventEmitter = require('events').EventEmitter;
const Ship = require('./Ship');

module.exports = class Game{
  constructor(){
    this.eventEmitter = new EventEmitter();
    this._players = [];
    this._stage = new Stage();
    this.username = "";

    //TODO:Añadir debe ser por conexión de usuario
    //this.addPlayer();
    const button = document.querySelector('button');
    button.addEventListener('click', ()=>{
      let input = document.querySelector('input');
      this.username = input.value;

      this.addPlayer();
    });

    this.engine();
  }

  addPlayer(){
    this._players.push(new Ship(this, 'black', this.username));
  }

  //TODO: Remover un jugador al estar en estado muerto
  removePlayer(){

  }

  engine(){
    this._stage.start();
    this.eventEmitter.emit('update');
    requestAnimationFrame(this.engine.bind(this));
  }
}
