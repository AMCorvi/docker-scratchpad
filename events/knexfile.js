module.exports = {
  development: {
    client:     'pg'
    ,version:    '10.4'
    ,connection: {
      host:     'corax.dev'
      ,port:     400
      ,user:     'superuser'
      ,password: 'enterpassword'
      ,database: 'postgres'
    }
    ,migrations: { directory: __dirname + '/db/migrations' }
    ,seeds:      { directory: __dirname + '/db/seeds' }
  }
  ,production: {
    client:     'pg'
    ,version:    '10.4'
    ,connection: {
      host:     process.env.DB_HOST
      ,port:     5432
      ,user:     process.env.DB_USER
      ,password: process.env.DB_PASSWORD
      ,database: process.env.DB_NAME
    }
    ,migrations: { directory: __dirname + '/db/migrations' }
    ,seeds:      { directory: __dirname + '/db/seeds' }
  }
}
