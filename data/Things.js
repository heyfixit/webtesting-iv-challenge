const Promise = require('promise');

let lastId = 7;
let Things = [
  { id: 1, name: 'Test1' },
  { id: 2, name: 'Test2' },
  { id: 3, name: 'Test3' },
  { id: 4, name: 'Test4' },
  { id: 5, name: 'Test5' },
  { id: 6, name: 'Test6' },
  { id: 7, name: 'Test7' },
];

const generateId = () => {
  lastId = lastId + 1;
  return lastId;
};

module.exports = {
  insert: thing => {
    const newThing = { ...thing, id: generateId() };
    Things.push(newThing);
    return Promise.resolve(newThing);
  },
  remove: id => {
    console.log(id);
    console.log(Things);
    const foundIndex = Things.findIndex(t => t.id.toString() === id.toString());
    console.log(foundIndex);
    if (foundIndex === -1) {
      return Promise.resolve(null);
    }

    const deletedItem = Things[foundIndex];
    Things = Things.splice(foundIndex, 1);
    return Promise.resolve(deletedItem);
  },
  Things
}
