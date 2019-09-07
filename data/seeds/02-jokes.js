exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jokes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('jokes').insert([
        {
          id: 1,
          joke: 'What did one nut say as he chased another nut?',
          punchline: `I'm a cashew!`,
          private: true,
          user_id: 1
        },
        {
          id: 2,
          joke: 'How come the stadium got hot after the game?',
          punchline: 'Because all of the fans left',
          private: true,
          user_id: 1
        },
        {
          id: 3,
          joke: 'Why didn’t the skeleton cross the road?',
          punchline: 'Because he had no guts.',
          private: false,
          user_id: 1
        },
        {
          id: 4,
          joke: `Chances are if you've seen one shopping center...`,
          punchline: `You've seen a mall.`,
          private: false,
          user_id: 1
        },
      ]);
    });
};
