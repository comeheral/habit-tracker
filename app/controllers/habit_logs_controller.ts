import type { HttpContext } from '@adonisjs/core/http'
import HabitLog from '#models/habit_log'
import Habit from '#models/habit'
import HabitLogTransformer from '#transformers/habit_log_transformer'
import { DateTime } from 'luxon'

export default class HabitLogsController {
  async index({ params, inertia, auth, response }: HttpContext){

    if (!params.date || params.date.includes('favicon')) return

    // Redirect to today if a future date is passed as param
    if(DateTime.fromISO(params.date) > DateTime.now().startOf('day')){
      response.redirect().toPath('/');
    }

    let habitLogs = await HabitLog.query()
      .where('user_id', auth.user!.id)
      .where('date', params.date)
      .preload('habit') // Habit details are needed for front-end display purposes

    if(habitLogs.length == 0){
      const activeHabits = await Habit.query().where('user_id', auth.user!.id).whereNull('deleted_at').orderBy('created_at', 'asc')
      
      const createPayload = activeHabits.map(habit => ({
        date: params.date,
        userId: auth.user!.id,
        habitId: habit.$attributes.id,
      }))

      await HabitLog.createMany(createPayload)

      habitLogs = await HabitLog.query()
        .where('user_id', auth.user!.id)
        .where('date', params.date)
        .preload('habit') // Habit details are needed for front-end display purposes
    }

    return inertia.render('home', {
      habitLogs: HabitLogTransformer.transform(habitLogs),
      date: params.date
    })
  }

  async update({ params, request, response}: HttpContext){
    console.log('update : ', params.id, request.input('isChecked'))
    const habitLog = await HabitLog.findOrFail(params.id)
    habitLog.isCompleted = request.input('isChecked')
    await habitLog.save()

    return response.redirect().back()
  }
}