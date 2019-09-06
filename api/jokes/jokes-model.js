const db = require('../../data/dbConfig.js');

module.exports = {
  all,
  public
}

function all() {
  return db('jokes');
};

async function public() {
  return await db('jokes').where({private: false});
}
