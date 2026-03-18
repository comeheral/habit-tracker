import { HabitSchema } from '#database/schema'
import { hasMany, belongsTo } from '@adonisjs/lucid/orm'
import type { HasMany, BelongsTo } from '@adonisjs/lucid/types/relations'
import HabitLog from '#models/habit_log'
import User from '#models/user'

export default class Habit extends HabitSchema {
  @hasMany(() => HabitLog)
  declare habitLogs: HasMany<typeof HabitLog>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}