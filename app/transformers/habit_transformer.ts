import { BaseTransformer } from '@adonisjs/core/transformers'
import Habit from '#models/habit'

export default class HabitTransformer extends BaseTransformer<Habit> {
  toObject() {
    return this.pick(this.resource, [
      'id',
      'name',
      'userId',
      'deletedAt',
      'updatedAt',
      'createdAt'
    ])
  }
}