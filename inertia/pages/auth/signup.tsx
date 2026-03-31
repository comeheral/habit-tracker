import { Form, Link } from '@adonisjs/inertia/react'

export default function Signup() {
  return (
    <div className="form-container">
      <div>
        <h1 className="text-2xl font-bold mb-4">Signup</h1>
        <p className="text-sm text-base-content mb-8">Enter your details below to create your account</p>
      </div>

      <div>
        <Form route="new_account.store">
          {({ errors }) => (
            <>
              <div className="mb-4">
                <label className="input w-full">
                  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </g>
                  </svg>
                  <input type="text" name="fullName" id="fullName" placeholder="Full name" required data-invalid={errors.fullName ? 'true' : undefined} />
                </label>
                {errors.fullName && <div>{errors.fullName}</div>}
              </div>

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
                  <input type="password" name="password" id="password" autoComplete="new-password" placeholder="Password" required data-invalid={errors.password ? 'true' : undefined} />
                </label>
                {errors.password && <div>{errors.password}</div>}
              </div>

              <div className="mb-4">
                <label className="input w-full">
                  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                      <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                      <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </g>
                  </svg>
                  <input type="password" name="passwordConfirmation" id="passwordConfirmation" autoComplete="new-password" placeholder="Confirm password" required data-invalid={errors.passwordConfirmation ? 'true' : undefined} />
                </label>
                {errors.passwordConfirmation && <div>{errors.passwordConfirmation}</div>}
              </div>

              <button type="submit" className="btn btn-secondary w-full mt-4">Sign up</button>

              <p className="text-sm text-center text-neutral mt-4">Already have an account ? <Link route="session.create" className="underline">Log in</Link></p>
            </>
          )}
        </Form>
      </div>
    </div>
  )
}
