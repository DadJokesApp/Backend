exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
      users.increments()
  
      users
        .string('username', 128)
        .notNullable()
        .unique()
  
      users
        .string('email', 128)
        .notNullable()
        .unique()
  
      users
        .string('img_url', 128)
        .unique()
        
      users
        .string('password', 128)
        .notNullable()
    })
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
  }
  