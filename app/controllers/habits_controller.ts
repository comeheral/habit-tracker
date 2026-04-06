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

  async store({ request, auth, response }: HttpContext){
    const data = request.only(['name']) // Get only the name since this is the only useful data - more secure than request.all()

   await Habit.create({
      ...data,
      userId: auth.user!.id
    })

    return response.redirect().toRoute('habits.index')
  }
}