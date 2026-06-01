/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'new_account.create': {
    methods: ["GET","HEAD"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.create']['types'],
  },
  'new_account.store': {
    methods: ["POST"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.store']['types'],
  },
  'session.create': {
    methods: ["GET","HEAD"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.create']['types'],
  },
  'session.store': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.store']['types'],
  },
  'session.destroy': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['session.destroy']['types'],
  },
  'habits.index': {
    methods: ["GET","HEAD"],
    pattern: '/habits',
    tokens: [{"old":"/habits","type":0,"val":"habits","end":""}],
    types: placeholder as Registry['habits.index']['types'],
  },
  'habits.store': {
    methods: ["POST"],
    pattern: '/habits',
    tokens: [{"old":"/habits","type":0,"val":"habits","end":""}],
    types: placeholder as Registry['habits.store']['types'],
  },
  'habits.destroy': {
    methods: ["DELETE"],
    pattern: '/habits/:id',
    tokens: [{"old":"/habits/:id","type":0,"val":"habits","end":""},{"old":"/habits/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['habits.destroy']['types'],
  },
  'home': {
    methods: ["GET","HEAD"],
    pattern: '/:date',
    tokens: [{"old":"/:date","type":1,"val":"date","end":""}],
    types: placeholder as Registry['home']['types'],
  },
  'habit_logs.update': {
    methods: ["PATCH"],
    pattern: '/habit-logs/:id',
    tokens: [{"old":"/habit-logs/:id","type":0,"val":"habit-logs","end":""},{"old":"/habit-logs/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['habit_logs.update']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
