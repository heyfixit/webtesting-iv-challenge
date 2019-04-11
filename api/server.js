const express = require('express');
const server = express();

const Things = require('../data/Things');

server.use(express.json());
server.get('/', async (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.post('/things', (req, res) => {
  const newThing = req.body;
  if(!newThing.name) {
    return res.status(422).json({message: 'Name required'});
  }

  return Things.insert(req.body).then(createdThing =>
    res.status(200).json(createdThing)
  );
});

module.exports = server;
