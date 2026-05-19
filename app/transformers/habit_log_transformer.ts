import { BaseTransformer } from '@adonisjs/core/transformers'
import HabitLog from '#models/habit_log'
import HabitTransformer from '#transformers/habit_transformer'

export default class HabitLogTransformer extends BaseTransformer<HabitLog> {
  toObject() {
    return {
      ...this.pick(this.resource, [
        'id',
        'isCompleted'
      ]),
      habit: HabitTransformer.transform(this.resource.habit)
    }
  }
}