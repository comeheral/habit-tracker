import type { InertiaProps } from '~/types'
import type { Data } from '@generated/data'
import { Form } from '@adonisjs/inertia/react'

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
        <button className="btn btn-secondary w-full mt-4" onClick={()=>(document.getElementById('add_modal') as HTMLDialogElement)?.showModal()}>Add a habit</button>
      </div>

      <dialog id="add_modal" className="modal">
        <div className="modal-box">
          <h2 className="font-bold text-lg mb-4">Add a habit</h2>
          <Form route="habits.store" options={{ preserveScroll: true, preserveState: true, preserveUrl: true}}>
            {({ errors }) => (
              <>
                <input type="text" name="name" id="name" placeholder="Habit name" className="input mb-4" />
                <div className="flex gap-2">
                  <button type="button" className="btn btn-tertiary w-100 shrink" onClick={()=>(document.getElementById('add_modal') as HTMLDialogElement)?.close()}>Cancel</button>
                  <button type="submit" className="btn btn-primary w-100 shrink">Add</button>
                </div>
              </>
            )}
          </Form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}