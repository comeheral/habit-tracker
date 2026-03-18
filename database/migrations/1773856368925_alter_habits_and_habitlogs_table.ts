import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  
  async up() {
    this.schema.alterTable('habits', (table) => {
      table.integer('user_id').unsigned().notNullable()
      table.foreign('user_id').references('users.id').onDelete('CASCADE') // CASCADE means if the user is deleted, all the linked habits will be deleted
    })

    this.schema.alterTable('habit_logs', (table) => {
      table.integer('user_id').unsigned().notNullable()
      table.foreign('user_id').references('users.id').onDelete('CASCADE')

      table.integer('habit_id').unsigned().notNullable()
      table.foreign('habit_id').references('habits.id').onDelete('CASCADE')
    })
  }

  async down() {
    this.schema.alterTable('habits', (table) => {
      table.dropForeign(['user_id'])
      table.dropColumn('user_id')
    })

    this.schema.alterTable('habit_logs', (table) => {
      table.dropForeign(['user_id'])
      table.dropForeign(['habit_id'])
      table.dropColumn('user_id')
      table.dropColumn('habit_id')
    })
  }
}