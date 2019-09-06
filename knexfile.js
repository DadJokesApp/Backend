module.exports = {

  development: {
    client: 'sqlite3',
<<<<<<< HEAD
    connection: {
      filename: './data/jokes-development.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    }
  }
}
=======
    useNullAsDefault: true,
    connection: {
      filename: './data/auth.db3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      },
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
}
>>>>>>> 2901c76431f5df3cffc8ec04c22fbecfcf8ba752
