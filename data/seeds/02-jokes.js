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
          laughs: '1',
          private: true,
          user_id: 5
        },
        {
          id: 2,
          joke: 'How come the stadium got hot after the game?',
          punchline: 'Because all of the fans left',
          laughs: '57',
          private: true,
          user_id: 1
        },
        {
          id: 3,
          joke: 'Why didn’t the skeleton cross the road?',
          punchline: 'Because he had no guts.',
          laughs: '84',
          private: false,
          user_id: 6
        },
        {
          id: 4,
          joke: `Chances are if you've seen one shopping center...`,
          punchline: `You've seen a mall.`,
          laughs: '1',
          private: true,
          user_id: 5
        },
        {
          id: 5,
          joke: `Did you hear about the guy who invented Lifesavers?`,
          punchline: `They say he made a mint.`,
          laughs: '82',
          private: false,
          user_id: 2
        },
        {
          id: 6,
          joke: `A ham sandwich walks into a bar and orders a beer. Bartender says...`,
          punchline: `Sorry we don't serve food here.`,
          laughs: '97',
          private: false,
          user_id: 4
        },
        {
          id: 8,
          joke: `How do you make a Kleenex dance?`,
          punchline: `Put a little boogie in it!`,
          laughs: '102',
          private: false,
          user_id: 6
        },
        {
          id: 9,
          joke: `How do you make holy water?`,
          punchline: `You boil the hell out of it!`,
          laughs: '84',
          private: true,
          user_id: 1
        },
        {
          id: 10,
          joke: `I had a dream that I was a muffler last night.`,
          punchline: `I woke up exhausted!`,
          laughs: '53',
          private: true,
          user_id: 6
        },
        {
          id: 11,
          joke: `What is Beethoven's favorite fruit?`,
          punchline: `A ba-na-na-na`,
          laughs: '86',
          private: false,
          user_id: 2
        },
        {
          id: 12,
          joke: `A three-legged dog walks into a bar and says to the bartender...`,
          punchline: `I'm looking for the man who shot my paw.`,
          laughs: '66',
          private: false,
          user_id: 4
        },
        {
          id: 13,
          joke: `What's Forrest Gump's password?`,
          punchline: `1forest1`,
          laughs: '108',
          private: false,
          user_id: 1
        },
      ]);
    });
};
