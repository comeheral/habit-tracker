/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'


// Home : redirect to today's date
router.get('/', ({ response }) => {
  const today = new Date().toISOString().split('T')[0]
  return response.redirect().toRoute('home', { date: today })
}).use(middleware.auth())

// Auth
router
  .group(() => {
    router.get('signup', [controllers.NewAccount, 'create'])
    router.post('signup', [controllers.NewAccount, 'store'])

    router.get('login', [controllers.Session, 'create'])
    router.post('login', [controllers.Session, 'store'])
  })
  .use(middleware.guest())

router
  .group(() => {
    router.post('logout', [controllers.Session, 'destroy'])
  })
  .use(middleware.auth())

// Habits
router.get('/habits', [controllers.Habits, 'index']).use(middleware.auth())
router.post('/habits', [controllers.Habits, 'store'])
router.delete('/habits/:id', [controllers.Habits, 'destroy'])

// Habit logs - Generic path defined after the specific ones to avoid conflicting
router.get('/:date', [controllers.HabitLogs, 'index']).as('home').use(middleware.auth())
router.patch('/habit-logs/:id', [controllers.HabitLogs, 'update'])