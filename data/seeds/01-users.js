// Enable bcryptjs and .env 💬
require('dotenv').config()
const bcrypt = require('bcryptjs')

// Plant seeds 🏡
exports.seed = function(knex) {
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries 🌱
      return knex('users').insert([
        { id: 1,
          username: 'FireNinja',
          email: 'mcbride967@gmail.com',
          password: bcrypt.hashSync(process.env.PASSWORD, 10)}
      ])
    })
}
