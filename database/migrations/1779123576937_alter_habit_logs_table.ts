import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'habit_logs'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.date('date').notNullable().alter()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.date('date').notNullable().defaultTo(this.now()).alter()
    })
  }
}