
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jokes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('jokes').insert([
        {
          id: 1,
          body: "What did one nut say as he chased another nut?  I'm a cashew!",
          private: true,
          user_id: 1
        },
        {
          id: 2,
          body: "How come the stadium got hot after the game? Because all of the fans left",
          private: true,
          user_id: 1
        },
        {
          id: 3,
          body: "Why didn’t the skeleton cross the road? Because he had no guts.",
          private: false,
          user_id: 1
        },
        {
          id: 4,
          body: "Chances are if you've seen one shopping center, you've seen a mall.",
          private: false,
          user_id: 1
        },
      ]);
    });
};
