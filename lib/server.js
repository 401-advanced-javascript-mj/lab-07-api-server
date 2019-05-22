'use strict';

const express = require('express');
const Entry = require('./entryConstructor.js');

const app = express();

const PORT = process.env.PORT || 8080;

let db = [];

const schema = ['name'];

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
  const record = Entry.validate(req.body, schema);
  if (record) {
    record.id = db.length + 1;
    db.push(record);
    res.json(record);
  } else res.send('invalid data');
});

app.put('/categories/:id', (req, res, next) => {
  // const record = Entry.validate(req.body, schema);
  // if (record) {
  //   record.id = db.length + 1;
  //   db.push(record);
  //   res.json(record);
  // } else res.send('invalid data');

  let id = parseInt(req.params.id);
  let ids = db.map(entry => {
    return entry.id;
  });

  if (ids.includes(id)) {
    const idToUpdate = ids.indexOf(id);

    const record = Entry.validate(req.body, schema);
    if (record) {
      record.id = id;
      db[idToUpdate] = record;
      res.json(record);
    } else res.send('invalid data');
  } else {
    res.send('No entry found at that id');
  }
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
