const todoRoutes = require('./todo_routes');

module.exports = app => {
  todoRoutes(app);
};
