const express = require('express');
const server = express();

const Things = require('../data/Things');

server.use(express.json());
server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.post('/things', (req, res) => {
  const newThing = req.body;
  if (!newThing.name) {
    return res.status(422).json({ message: 'Name required' });
  }

  return Things.insert(req.body).then(createdThing =>
    res.status(200).json(createdThing)
  );
});

server.delete('/things/:id', (req, res) => {
  return Things.remove(req.params.id).then(thing => {
    if (!thing) {
      return res.status(404).json({ message: 'Thing not found' });
    }

    return res.status(200).json(thing);
  });
});

module.exports = server;
