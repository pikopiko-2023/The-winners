export async function up (knex) {
  return knex.schema.createTable('wins', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('title')
    table.string('win')
    table.string('date')
    table.string('type')
  })
}

export async function down (knex) {
  return knex.schema.dropTable('wins')
}
