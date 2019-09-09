// Require Database 💻
const db = require('../../data/dbConfig.js')

// Export functions 🚀
module.exports = {
  add,
  find,
  findBy,
  findById,
  jokes
}

// Functions ⚙️
function find() {
  return db('users').select('id', 'username', 'email', 'password')
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

// select * from users join jokes on (users.id = jokes.user_id) where users.id = 1;
function jokes(id) {
  return db('users as u')
    .join('jokes as j', 'j.user_id', 'u.id')
    .where('u.id', id)
    .select('j.user_id', 'j.joke', 'j.punchline', 'j.private')
}

