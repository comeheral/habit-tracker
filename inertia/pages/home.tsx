import type { InertiaProps } from '~/types'
import type { Data } from '@generated/data'
import { router } from '@inertiajs/react'

type PageProps = InertiaProps<{
  habitLogs: Data.HabitLog[]
  date: string
}>

export default function Home({ habitLogs, date }: PageProps) {
  const today = new Date().toISOString().split('T')[0]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{date == today ? 'Today' : date}</h1>
      <div>
        {habitLogs.map((habitLog) => (
          <div key={habitLog.id} className="bg-base-200 border border-base-300 rounded-field px-3 py-3 mb-2 flex items-center gap-3">
            <input 
              type="checkbox" 
              className="checkbox checkbox-secondary rounded-md" 
              defaultChecked={!!habitLog.isCompleted} 
              onChange={(e) => router.patch(`/habit-logs/${habitLog.id}`, { isChecked: e.target.checked }, { preserveScroll: true })}
            />

            <p className="text-base">{habitLog.habit.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
