exports.up = function(knex) {
  return knex.schema.createTable('comments', function(actions) {
    actions.increments()

    actions
      .integer('joke_id')
      .unsigned()
      .notNullable()
      .references('jokes.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    actions
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('users.id')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    actions.string('comment', 128).notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('comments')
}