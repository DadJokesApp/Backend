const db = require('../../data/dbConfig.js');

module.exports = {
  all,
  findById,
  public,
  create,
  remove,
  update,
  find, 
  findComments
}

function all() {
  return db('jokes as j')
    .join('users as u', 'j.user_id', 'u.id')
    .select('j.id', 'u.username', 'u.img_url', 
    'j.joke', 'j.punchline', 'j.private', 'j.revealed', 'j.laughs', 'j.user_id')
}

function findComments(joke_id) {
  return db('comments as c')
    .join('jokes as j', 'c.joke_id', 'j.id')
    .join('users as u', 'c.user_id', 'u.id')
    .select('c.id', 'c.joke_id', 'u.username', 'u.img_url', 'c.comment')
    .where({ joke_id })
}

function findById(id) {
  return db('jokes')
    .where({ id })
    .first()
}

async function public() {
  return await db('jokes').where({private: false})
}

function create(joke) {
  return db('jokes').insert(joke)
}

function remove(id) {
  return db('jokes').where({ id: id }).del()
}

async function update(joke, id) {
  await db('jokes').where({ id }).update(joke)
  return find(id)
}

function find(id) {
  return db('jokes').where({ id }).first()
}
