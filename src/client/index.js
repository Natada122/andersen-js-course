import './styles/main.css';
import Model from './model';
import View from './view';
import Controller from './controller';
import { remove, put, post, load } from './helpers';
import { ACTION_PUT, ACTION_DELETE, ACTION_POST } from './constants';

const state = load();

const model = new Model(state || undefined);
model.on(ACTION_DELETE, data => remove(data));
model.on(ACTION_PUT, data => put(data));
model.on(ACTION_POST, data => post(data));

const view = new View();
// eslint-disable-next-line no-unused-vars
const controller = new Controller(model, view);
