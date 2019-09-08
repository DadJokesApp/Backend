// Require Database 💻
const db = require('../../data/dbConfig.js')

// Export functions 🚀
module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
}

// Functions ⚙️
function find() {
  return db('users').select('id', 'username', 'email', 'img_url', 'password')
}

function findBy(filter) {
  return db('users').where(filter)
}

async function add(user) {
  const [id] = await db('users').insert(user)

  return findById(id)
}

function findById(id) {
  return db('users')
    .where({ id })
    .first()
}

async function update(changes, id) {
  await db('users')
    .where({ id })
    .update(changes)

  return findById(id)
}

// function update(changes, id) {
//   return db('users')
//     .where({ id })
//     .update(changes)
// }

function remove(id) {
  // returns removed count
  return db('users')
    .where({ id })
    .del()
}