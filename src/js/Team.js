export default class Team {
  constructor() {
    this.length = 3;
  }
  
  *[Symbol.iterator]() {
    // это генератор
    // и здесь есть доступ к this
    // остаётся лишь правильно написать yield
    yield this[0];
    yield this[1];
    yield this[2];

    return true;
  }
}