const db = require('../../data/dbConfig.js');

module.exports = {
  all,
  public,
  add
}

function all() {
  return db('jokes');
};

async function public() {
  return await db('jokes').where({private: false});
}

function add(joke) {
  return db('jokes').insert(joke);
}
