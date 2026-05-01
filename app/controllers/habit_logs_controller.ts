import type { HttpContext } from '@adonisjs/core/http'
import HabitLog from '#models/habit_log'
import Habit from '#models/habit'

export default class HabitLogsController {
  async index({ params, inertia, auth }: HttpContext){
    let habitLogs = await HabitLog.query() // TODO : add date param to the query

    if(habitLogs.length == 0){
      const activeHabits = await Habit.query().where('user_id', auth.user!.id).whereNull('deleted_at').orderBy('created_at', 'asc')
      console.log('active habits : ', activeHabits)
      
      const createPayload = activeHabits.map(habit => ({
        userId: auth.user!.id,
        habitId: habit.$attributes.id,
      }))

      await HabitLog.createMany(createPayload)
      // TODO : Make a query to habitlog with preload for habits - then use it in a habitLogs transformer
      // Habit details are needed for front-end display purposes
    }
    
    console.log('habit logs : ', habitLogs.length)

    return inertia.render('home', { habitLogs })
  }
}