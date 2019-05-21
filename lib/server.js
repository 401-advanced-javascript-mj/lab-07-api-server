'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

let db = [];

app.use(express.json());

app.use((req, res, next) => {
  console.log('LOG:', req.method, req.path);
  next();
});

app.get('/categories', (req, res, next) => {
  let count = db.length;
  let results = db;
  res.json({ count, results });
});

app.get('/categories/:id', (req, res, next) => {
  let id = req.params.id;
  let record = db.filter(record => record.id === parseInt(id));
  res.json(record[0]);
});

app.post('/categories', (req, res, next) => {
  let { name } = req.body;
  let record = { name };
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
});

app.put('/categories/:id', (req, res, next) => {
  let id = parseInt(req.params.id);
  let ids = db.map(entry => {
    return entry.id;
  });

  const { name } = req.body;

  if (ids.includes(id)) {
    const idToUpdate = ids.indexOf(id);
    db[idToUpdate].name = name;
  }
  res.send('done');
});

app.delete('/categories/:id', (req, res, next) => {
  let id = req.params.id;
  db = db.filter(entry => entry.id !== parseInt(id));
  res.json(db);
});

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};
