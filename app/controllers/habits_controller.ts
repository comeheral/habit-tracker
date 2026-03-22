import type { HttpContext } from '@adonisjs/core/http'
import Habit from '#models/habit'
import HabitTransformer from '#transformers/habit_transformer'

export default class HabitsController {
  async index({ inertia }: HttpContext){
    const habits = await Habit.query().whereNull('deleted_at').orderBy('created_at', 'asc')
    return inertia.render('habits/index', {
      habits: HabitTransformer.transform(habits)
    })
  }
}