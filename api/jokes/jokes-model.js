const db = require('../../data/dbConfig.js');

module.exports = {
  all,
  public,
  create
}

function all() {
  return db('jokes');
};

async function public() {
  return await db('jokes').where({private: false});
}

function create(joke) {
  return db('jokes').insert(joke);
}
