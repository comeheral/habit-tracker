import type { InertiaProps } from '~/types'
import type { Data } from '@generated/data'

type PageProps = InertiaProps<{
  habits: Data.Habit[]
}>

export default function Index({ habits }: PageProps) {
  return (
    <div>
      <h1>Index</h1>
      <div>
        {habits.map((habit) => (
          <div key={habit.id}>
            <p>{habit.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}