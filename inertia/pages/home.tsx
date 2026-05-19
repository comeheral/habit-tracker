import type { InertiaProps } from '~/types'
import type { Data } from '@generated/data'

type PageProps = InertiaProps<{
  habitLogs: Data.HabitLog[]
}>

export default function Home({ habitLogs }: PageProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Today</h1>
      <div>
        {habitLogs.map((habitLog) => (
          <div key={habitLog.id} className="bg-base-100 border border-base-300 rounded-field p-2 pl-4 mb-2 flex justify-between items-center">
            <p className="text-base">{habitLog.habit.name}</p>
            <p>{habitLog.isCompleted}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
