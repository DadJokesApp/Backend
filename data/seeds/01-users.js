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
          username: 'Stan Smith',
          email: 'ciaagent@america.com',
          img_url: 'https://i.imgur.com/iorA2Js.png',
          password: bcrypt.hashSync(process.env.PASSWORD, 10)
        },
        {
          id: 2,
          username: 'Rick Sanchez',
          email: 'therickestrick@multiverse.com',
          img_url: 'https://static1.squarespace.com/static/528252b7e4b00150d03a4848/59a2354eebbd1a0623e0cefe/59a2359f6a49631dd5192339/1503802789674/RickAndMorty_RickHappy1500.png?format=300w',
          password: bcrypt.hashSync(process.env.PASSWORD, 10)
        },
        {
          id: 3,
          username: 'Peter Griffin',
          email: 'chickenfighter@gmail.com',
          img_url: 'http://vignette1.wikia.nocookie.net/family-guy-the-quest-for-stuff/images/e/ec/Facespace_portrait_petergriffin_tweaker_default_V2@4x.png/revision/latest?cb=20140420142532',
          password: bcrypt.hashSync(process.env.PASSWORD, 10)
        },
        {
          id: 4,
          username: 'Bob Belcher',
          email: 'info@bobsburgers.com',
          img_url: 'http://fs.delphiforums.net/bobsburgers/images/bob_linda.png',
          password: bcrypt.hashSync(process.env.PASSWORD, 10)
        },
        {
          id: 5,
          username: 'Jerry Smith',
          email: 'hungryforapples@gmail.com',
          img_url: 'https://i.imgur.com/BHK3COV.png',
          password: bcrypt.hashSync(process.env.PASSWORD, 10)
        },
        {
          id: 6,
          username: 'Professor Farnsworth',
          email: 'planetexpress@gmail.com',
          img_url: 'https://i.imgur.com/UOg5rz1.png',
          password: bcrypt.hashSync(process.env.PASSWORD, 10)
        },
      ])
    })
}
