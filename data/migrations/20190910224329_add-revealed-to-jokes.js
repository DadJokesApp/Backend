
exports.up = function(knex) {
  return (
    knex.schema.table('jokes', t => {
      t.boolean('revealed').defaultTo(false);
    })
  )
};

exports.down = function(knex) {
  return(
    knex.schema.table('jokes', t => {
      t.dropColumn('revealed');
    })
  )
};
