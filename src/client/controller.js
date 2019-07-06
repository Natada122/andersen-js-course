import { ACTION_EDIT, ACTION_REMOVE, ACTION_TOGGLE, ACTION_ADD } from './constants';

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    view.on(ACTION_ADD, this.addTodo.bind(this));
    view.on(ACTION_TOGGLE, this.toggleTodo.bind(this));
    view.on(ACTION_EDIT, this.editTodo.bind(this));
    view.on(ACTION_REMOVE, this.removeTodo.bind(this));

    view.show(model.items);
  }

  addTodo(title) {
    const item = this.model.addItem({
      id: Date.now(),
      title,
      completed: false,
    });

    this.view.addItem(item);
  }

  toggleTodo({ id, completed }) {
    const item = this.model.updateItem(id, { completed });
    this.view.toggleItem(item);
  }

  editTodo({ id, title }) {
    const item = this.model.updateItem(id, { title });

    this.view.editItem(item);
  }

  removeTodo(id) {
    this.model.removeItem(id);
    this.view.removeItem(id);
  }
}

export default Controller;
