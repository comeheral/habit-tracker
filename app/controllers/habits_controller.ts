import type { HttpContext } from '@adonisjs/core/http'
import Habit from '#models/habit'
import HabitTransformer from '#transformers/habit_transformer'

export default class HabitsController {
  async index({ inertia, auth }: HttpContext){
    const habits = await Habit.query().where('user_id', auth.user!.id).whereNull('deleted_at').orderBy('created_at', 'asc')
    return inertia.render('habits/index', {
      habits: HabitTransformer.transform(habits)
    })
  }
}