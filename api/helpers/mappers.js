module.exports = {
  intToBoolean,
  booleanToInt,
  userToBody,
  jokeToBody,
};

function intToBoolean(int) {
  return int === 1 ? true : false;
}

function booleanToInt(bool) {
  return bool === true ? 1 : 0;
}

function userToBody(users) {
  const result = {
    ...users,
  };

  if (users.jokes) {
    result.jokes = project.jokes.map(joke => ({
      ...joke,
      revealed: intToBoolean(joke.revealed),
      private: intToBoolean(joke.private),
    }));
  }

  return result;
}

function jokeToBody(jokes) {
  return {
    ...jokes,
    revealed: intToBoolean(jokes.revealed),
    private: intToBoolean(joke.private),
  };
}