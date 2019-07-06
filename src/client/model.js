/* eslint-disable eqeqeq */
import { EventEmitter } from './helpers';
import { ACTION_PUT, ACTION_DELETE, ACTION_POST } from './constants';

class Model extends EventEmitter {
  constructor(items = []) {
    super();
    this.items = items;
    this.items.then(value => {
      this.data = value;
    });
  }

  getItem(id) {
    return this.data.find(item => item.id == id);
  }

  addItem(item) {
    this.data.push(item);
    this.emit(ACTION_POST, item);
    return item;
  }

  updateItem(id, data) {
    const item = this.getItem(id);
    Object.keys(data).forEach(prop => {
      item[prop] = data[prop];
    });
    this.emit(ACTION_PUT, item);
    return item;
  }

  removeItem(id) {
    const index = this.data.findIndex(item => item.id == id);
    if (index > -1) {
      this.emit(ACTION_DELETE, this.data[index]);
      this.data.splice(index, 1);
    }
  }
}

export default Model;
