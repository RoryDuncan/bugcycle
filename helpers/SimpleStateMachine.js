import EventEmitter from 'events';
import assign from 'object-assign';

export default class SimpleStateMachine {
  constructor() {
    this.events = new EventEmitter();
    this._state = [];
  }

  get state() {
    return this._state[0] || {};
  }

  set state(obj) {

    // merge objects
    let prevState = this.state;
    let nextState = assign({}, prevState, obj);
    this._state.unshift(nextState);
    this.events.emit("changed")
  }
}