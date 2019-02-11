exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', function(table) {
    table.increments()
    table.string('name')
    table.string('start_time')
    table.string('end_time')
    table.string('address')
    table.integer('zip')
    table.string('city')
    table.string('state')
    table.timestamp(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events')
}
