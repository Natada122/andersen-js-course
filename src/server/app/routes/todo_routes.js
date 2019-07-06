const Todo = require('../models/todo');

module.exports = app => {
  app.get('/todos', async (req, res) => {
    await Todo.find().exec((err, results) => {
      if (err) {
        res.send({ error: `An error has occurred:${err}` });
      } else {
        res.send(results);
      }
    });
  });
  app.put('/todos/:id', async (req, res) => {
    const todo = { title: req.body.title, completed: req.body.completed, id: req.body.id };
    await Todo.findOneAndUpdate({ id: req.params.id }, todo, err => {
      if (err) {
        res.send({ error: `An error has occurred:${err}` });
      } else {
        res.send('Succesfull');
      }
    });
  });
  app.delete('/todos/:id', async (req, res) => {
    await Todo.findOneAndDelete({ id: req.params.id }, err => {
      if (err) {
        res.send({ error: `An error has occurred:${err}` });
      } else {
        res.send('Removed!');
      }
    });
  });
  app.post('/todos', (req, res) => {
    const todo = new Todo({
      title: req.body.title,
      completed: req.body.completed,
      id: req.body.id,
    });
    todo.save(err => {
      if (err) {
        res.send({ error: `An error has occurred:${err}` });
      } else {
        res.send('Succesfull');
      }
    });
  });
};
