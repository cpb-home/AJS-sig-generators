import Character from "../Character";

export default class Magician extends Character {
  constructor(level, name) {
    super(level);
    this.name = name;
    this.attack = 10;
    this.defence = 40;
    this.type = 'Magician';
  }
}