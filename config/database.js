module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "strapi_curso"),
        username: env("DATABASE_USERNAME", "strapi_curso"),
        password: env("DATABASE_PASSWORD", "strapi_curso_123"),
        ssl: env.bool("DATABASE_SSL", false)
      },
      options: {}
    }
  }
});
