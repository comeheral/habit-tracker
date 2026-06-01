/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  newAccount: {
    create: typeof routes['new_account.create']
    store: typeof routes['new_account.store']
  }
  session: {
    create: typeof routes['session.create']
    store: typeof routes['session.store']
    destroy: typeof routes['session.destroy']
  }
  habits: {
    index: typeof routes['habits.index']
    store: typeof routes['habits.store']
    destroy: typeof routes['habits.destroy']
  }
  home: typeof routes['home']
  habitLogs: {
    update: typeof routes['habit_logs.update']
  }
}
