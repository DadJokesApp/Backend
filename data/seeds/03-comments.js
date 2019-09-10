exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          id: 1, 
          joke_id: 1, 
          user_id: 3, 
          comment: 'This is a great joke!'
        },
        {
          id: 2, 
          joke_id: 1, 
          user_id: 2, 
          comment: 'I thought it was crap.'
        },
        {
          id: 3, 
          joke_id: 1, 
          user_id: 3, 
          comment: 'You would think that.'
        },
        {
          id: 4, 
          joke_id: 2, 
          user_id: 3, 
          comment: 'This is great!'
        },
        {
          id: 5, 
          joke_id: 2, 
          user_id: 1, 
          comment: 'I just peed myself! Hahahahaha'
        },
      ])
    })
}
