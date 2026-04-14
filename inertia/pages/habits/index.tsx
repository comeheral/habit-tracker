import type { InertiaProps } from '~/types'
import type { Data } from '@generated/data'
import { useRef } from 'react'
import { Form } from '@adonisjs/inertia/react'
import { FormComponentRef } from '@inertiajs/core'

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

  const handleFinish = () => {
    closeModal();
  }

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
          <Form ref={formRef} route="habits.store" options={{ preserveScroll: true }} onFinish={handleFinish}>
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