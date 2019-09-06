exports.up = function(knex) {
  return knex.schema.createTable('jokes', t => {
    t.increments();
    t.text('joke').notNullable();
    t.text('punchline');
    t.boolean('private').defaultTo(true);
    t.integer('user_id').notNullable().unsigned().references('users.id');
  })

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('jokes');
};
