import 'babel-polyfill';
import { ACTION_PUT, ACTION_DELETE, ACTION_POST, SERVER_URL } from './constants';

function createElement(tag, props, ...children) {
  const element = document.createElement(tag);

  Object.keys(props).forEach(key => {
    if (key.startsWith('data-')) {
      element.setAttribute(key, props[key]);
    } else {
      element[key] = props[key];
    }
  });

  children.forEach(child => {
    if (typeof child === 'string') {
      // eslint-disable-next-line no-param-reassign
      child = document.createTextNode(child);
    }

    element.appendChild(child);
  });

  return element;
}

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
  }

  emit(type, arg) {
    if (this.events[type]) {
      this.events[type].forEach(listener => listener(arg));
    }
  }
}

function post(data) {
  fetch(SERVER_URL, {
    method: ACTION_POST,
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
}

function put(data) {
  fetch(`${SERVER_URL}/${data.id}`, {
    method: ACTION_PUT,
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
}
function remove(data) {
  fetch(`${SERVER_URL}/${data.id}`, {
    method: ACTION_DELETE,
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
}
async function load() {
  const response = await fetch(SERVER_URL);
  const data = response.json();
  return data;
}

export { createElement, EventEmitter, put, remove, post, load };
