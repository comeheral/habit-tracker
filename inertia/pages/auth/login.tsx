import { Form, Link } from '@adonisjs/inertia/react'

export default function Login() {
  return (
    <div className="form-container">
      <div>
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <p className="text-sm text-base-content mb-8">Enter your details below to login to your account</p>
      </div>

      <div>
        <Form route="session.store">
          {({ errors }) => (
            <>
              <div className="mb-4">
                <label className="input w-full">
                  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g strokeLinejoin="round" strokeLinecap="round"strokeWidth="2.5"fill="none"stroke="currentColor">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input type="email" name="email" id="email" autoComplete="username" placeholder="Email" required data-invalid={errors.email ? 'true' : undefined} />
                </label>
                {errors.email && <div>{errors.email}</div>}
              </div>

              <div className="mb-4">
                <label className="input w-full">
                  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </g>
                  </svg>
                  <input type="password" name="password" id="password" autoComplete="current-password" placeholder="Password" required />
                </label>
                {errors.password ? <span>{errors.password}</span> : ''}
              </div>

              <button type="submit" className="btn btn-primary w-full mt-4">Login</button>

              <p className="text-sm text-center text-neutral mt-4">Don't have an account ? <Link route="new_account.create" className="underline">Sign up</Link></p>
            </>
          )}
        </Form>
      </div>
    </div>
  )
}
