exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          id: 1, 
          joke_id: 1, 
          user_id: 2, 
          comment: 'Really, Jerry? Is this the best joke you have?'
        },
        {
          id: 2, 
          joke_id: 1, 
          user_id: 5, 
          comment: `Life is effort I'll stop when I die!`
        },
        {
          id: 3, 
          joke_id: 2, 
          user_id: 3, 
          comment: 'Oh, I just thought it was because I farted.'
        },
        {
          id: 4, 
          joke_id: 2, 
          user_id: 1, 
          comment: `That's gross Peter...`
        },
        {
          id: 5, 
          joke_id: 2, 
          user_id: 3, 
          comment: `It was a work of art, Stan. A work of art!`
        },
        {
          id: 6, 
          joke_id: 4, 
          user_id: 2, 
          comment: `Nobody laughs at your jokes because they're crap.`
        },
        {
          id: 7, 
          joke_id: 4, 
          user_id: 5, 
          comment: `That's just mean Rick...`
        },
        {
          id: 8, 
          joke_id: 6, 
          user_id: 6, 
          comment: `That's so funny I peed myself!`
        },
        {
          id: 9, 
          joke_id: 6, 
          user_id: 2, 
          comment: `No, you're just too old to hold your blatter.`
        },
        {
          id: 10, 
          joke_id: 11, 
          user_id: 5, 
          comment: `This is...actually pretty good...`
        },
        {
          id: 11, 
          joke_id: 11, 
          user_id: 2, 
          comment: `Yeah, I know Jerry. I'm the smartest man in the universe.`
        },
        {
          id: 12, 
          joke_id: 11, 
          user_id: 5, 
          comment: `I hate you...`
        },
        {
          id: 13, 
          joke_id: 11, 
          user_id: 2, 
          comment: `Yeah, join the club.`
        },
      ])
    })
}
