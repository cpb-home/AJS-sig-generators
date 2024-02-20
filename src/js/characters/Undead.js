import Character from "../Character";

export default class Undead extends Character {
  constructor(level, name) {
    super(level);
    this.name = name;
    this.attack = 40;
    this.defence = 10;
    this.type = 'Undead';
  }
}