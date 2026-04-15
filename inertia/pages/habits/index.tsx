import type { InertiaProps } from '~/types'
import type { Data } from '@generated/data'
import { useRef } from 'react'
import { Form } from '@adonisjs/inertia/react'
import { FormComponentRef } from '@inertiajs/core'
import { router } from '@inertiajs/react'

type PageProps = InertiaProps<{
  habits: Data.Habit[]
}>

export default function Index({ habits }: PageProps) {
  const formRef = useRef<FormComponentRef>(null)  // Allows to access Form component's methods

  const closeModal = () => {
    (document.getElementById('add_modal') as HTMLDialogElement)?.close();  // Close the modal

    setTimeout(() => {
      formRef.current?.reset();  // Reset the form (after modal animation)
    }, 300)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Habits</h1>
      <div>
        {habits.map((habit) => (
          <div key={habit.id} className="bg-base-100 border border-base-300 rounded-field p-2 pl-4 mb-2 flex justify-between items-center">
            <p className="text-base">{habit.name}</p>
            <div>
              <button className="btn btn-soft btn-square btn-error" onClick={() => router.delete(`/habits/${habit.id}`, { preserveScroll: true })}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        ))}
        <button className="btn btn-secondary w-full mt-4" onClick={()=>(document.getElementById('add_modal') as HTMLDialogElement)?.showModal()}>Add a habit</button>
      </div>

      <dialog id="add_modal" className="modal">
        <div className="modal-box">
          <h2 className="font-bold text-lg mb-4">Add a habit</h2>
          <Form ref={formRef} route="habits.store" options={{ preserveScroll: true }} onFinish={closeModal}>
            {({ errors }) => (
              <>
                <input type="text" name="name" id="name" placeholder="Habit name" required className="input" />
                {errors.name && <p className="text-sm text-center text-error mt-2">{errors.name}</p>}
                <div className="flex gap-2 mt-4">
                  <button type="button" className="btn btn-tertiary w-100 shrink" onClick={closeModal}>Cancel</button>
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