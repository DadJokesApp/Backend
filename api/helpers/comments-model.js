// Require Database 💻
const db = require('../../data/dbConfig.js')

// Export functions 🚀
module.exports = {
  add,
  find,
  findById,
  update,
  remove
}

// Functions ⚙️
function find() {
  return db('comments as c')
    .join('users as u', 'c.user_id', 'u.id')
    // .join('jokes as j', 'c.joke_id', 'j.id')
    .select('c.id', 'c.joke_id', 'c.user_id', 'u.username', 'u.img_url', 'c.comment',)
}

async function add(comment) {
  const [id] = await db('comments').insert(comment)

  return findById(id)
}

function findById(id) {
  return db('comments')
    .where({ id })
    .first()
}

async function update(changes, id) {
  await db('users')
    .where({ id })
    .update(changes)

  return findById(id)
}

function remove(id) {
  // returns removed count
  return db('users')
    .where({ id })
    .del()
}