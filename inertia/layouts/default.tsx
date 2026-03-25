import { Data } from '@generated/data'
import { toast, Toaster } from 'sonner'
import { usePage } from '@inertiajs/react'
import { ReactElement, useEffect } from 'react'
import { Form, Link } from '@adonisjs/inertia/react'

export default function Layout({ children }: { children: ReactElement<Data.SharedProps> }) {
  useEffect(() => {
    toast.dismiss()
  }, [usePage().url])

  if (children.props.flash.error) {
    toast.error(children.props.flash.error)
  }

  return (
    <div className="max-w-xl m-auto p-8">
      {children.props.user && (
        <header className="mb-8">
          <nav className="flex items-center justify-between">
            <ul className="menu menu-horizontal bg-base-200 rounded-lg">
              <li><Link route="home">Home</Link></li>
              <li><Link route="habits.index">Habits</Link></li>
            </ul>
            <div className="flex items-center gap-2">
            <div className="avatar avatar-placeholder">
              <div className="bg-neutral text-neutral-content w-8 rounded-box">
                <span className="text-xs">{children.props.user.initials}</span>
              </div>
            </div>
            <Form route="session.destroy">
              <button className="btn btn-tertiary" type="submit">Logout</button>
            </Form>
            </div>
          </nav>
        </header>
      )}
      <main>{children}</main>
      <Toaster position="top-center" richColors />
    </div>
  )
}
