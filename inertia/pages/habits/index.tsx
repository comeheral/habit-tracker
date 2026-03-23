import type { InertiaProps } from '~/types'
import type { Data } from '@generated/data'

type PageProps = InertiaProps<{
  habits: Data.Habit[]
}>

export default function Index({ habits }: PageProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Habits</h1>
      <div>
        {habits.map((habit) => (
          <div key={habit.id} className="bg-base-100 border border-base-300 rounded-field px-4 py-3 mb-2">
            <p className="text-base">{habit.name}</p>
          </div>
        ))}
        <button className="btn btn-secondary w-full mt-4">Add a habit</button>
      </div>
    </div>
  )
}