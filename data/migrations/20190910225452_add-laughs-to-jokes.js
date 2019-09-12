
exports.up = function(knex) {
  return (
    knex.schema.table('jokes', t => {
      t.integer('laughs').defaultTo(0);
    })
  )
  
};

exports.down = function(knex) {
  return (
    knex.schema.table('jokes', t => {
      t.dropColumn('laughs');
    })
  )
};
