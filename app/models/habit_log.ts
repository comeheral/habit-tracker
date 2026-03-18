import { HabitLogSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Habit from '#models/habit'
import User from '#models/user'

export default class HabitLog extends HabitLogSchema {
  @belongsTo(() => Habit)
  declare habit: BelongsTo<typeof Habit>

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>
}