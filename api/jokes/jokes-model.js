const db = require('../../data/dbConfig.js');

module.exports = {
  all,
  public,
  create,
  remove,
  update,
  find
}

function all() {
  return db('jokes');
};

async function public() {
  return await db('jokes').where({private: false});
}

function create(joke) {
  return db('jokes').insert(joke);
}

function remove(id) {
  return db('jokes').where({ id: id }).del();
}

async function update(joke, id) {
  await db('jokes').where({ id }).update(joke);
  return find(id);
}

function find(id) {
  return db('jokes').where({ id }).first();
}
