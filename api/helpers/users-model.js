// Require Database 💻
const db = require('../../data/dbConfig.js')

// Export functions 🚀
module.exports = {
  add,
  find,
  findBy,
  findById,
  findJokes,
  update,
  remove,
  get,
  getUserJokes
}

// Functions ⚙️
function find() {
  return db('users')
}

function findBy(filter) {
  return db('users').where(filter)
}

function findJokes(user_id) {
  return db('jokes as j')
    .join('users as u', 'j.user_id', 'u.id')
    .select('j.id', 'u.username', 'u.img_url', 'j.joke', 'j.punchline', 'j.laughs')
    .where({ user_id })

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

function remove(id) {
  // returns removed count
  return db('users')
    .where({ id })
    .del()
}

function get(id) {
  let query = db('users as u')
  if (id) {
    query.where('u.id', id)

    const promises = [query, this.getUserJokes(id)]

    return Promise.all(promises).then(function(results) {
      let [user, jokes] = results

      if (user) {
        user.jokes = jokes

        return mappers.userToBody(user)
      } else {
        return null
      }
    })
  }
  return query.then(users => {
    return users.map(user => mappers.userToBody(user))
  })
}

function getUserJokes(userId) {
  return db('jokes as j')
    .where('j.user_id', userId)
    .then(jokes => jokes.map(joke => mappers.jokeToBody(joke)));
}