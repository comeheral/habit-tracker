import type { HttpContext } from '@adonisjs/core/http'
import HabitLog from '#models/habit_log'
import Habit from '#models/habit'
import { DateTime } from 'luxon'

export default class HabitLogsController {
  async index({ params, inertia, auth, response }: HttpContext){

    if (!params.date || params.date.includes('favicon')) return

    // TODO : Redirect to '/' if future date

    let habitLogs = await HabitLog.query()
      .where('user_id', auth.user!.id)
      .where('date', params.date)
      .preload('habit') // Habit details are needed for front-end display purposes

    console.log('params : ', params)
    console.log('habit logs length : ', habitLogs.length);

    if(habitLogs.length == 0){
      const activeHabits = await Habit.query().where('user_id', auth.user!.id).whereNull('deleted_at').orderBy('created_at', 'asc')
      console.log('active habits : ', activeHabits)
      
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

    // TODO : Use a transformer to use the data in the front-end
    
    console.log('habit logs : ', habitLogs.length)

    return inertia.render('home', { habitLogs })
  }
}