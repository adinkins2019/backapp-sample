// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql',
    connection: {
      hostname: process.env.DEV_HOST,
      user: process.env.DEV_USER,
      password: process.env.DEV_PASSWORD,
      database: process.env.DEV_NAME
    },
    migrations: {
      directory: "./db/migrations",
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST
    },
    migrations: {
      directory: "./db/migrations"
    }
  }

};
