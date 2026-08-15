import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button'
import { useApp } from '../../context/AppContext'
import { defaultDashboardByRole } from '../../routes/navConfig'

const roles = ['student', 'driver', 'admin']

export default function LoginPage() {
  const { auth, login } = useApp()
  const navigate = useNavigate()
  const [form, setForm] = useState({ role: 'student', identifier: '', password: '' })
  const [error, setError] = useState('')

  if (auth?.isLoggedIn) {
    return <Navigate replace to={defaultDashboardByRole[auth.role]} />
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const result = login(form)
    if (!result.success) {
      setError(result.message)
      return
    }

    navigate(defaultDashboardByRole[result.data.role], { replace: true })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-100 to-white p-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
        <p className="text-sm font-semibold text-blue-700">SMART BUS MANAGEMENT SYSTEM</p>
        <h1 className="mt-1 text-2xl font-bold text-slate-900">Vignan University, Guntur</h1>
        <p className="mt-1 text-sm text-slate-500">Demo Login (Frontend MVP)</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-slate-700">
            Role
            <select
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              onChange={(event) => setForm((prev) => ({ ...prev, role: event.target.value }))}
              value={form.role}
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role.toUpperCase()}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Email / University ID
            <input
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              onChange={(event) => setForm((prev) => ({ ...prev, identifier: event.target.value }))}
              placeholder="student@vignan.edu"
              required
              value={form.identifier}
            />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Password
            <input
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              onChange={(event) => setForm((prev) => ({ ...prev, password: event.target.value }))}
              required
              type="password"
              value={form.password}
            />
          </label>
          {error ? <p className="text-sm text-rose-600">{error}</p> : null}
          <Button className="w-full" type="submit">
            Login
          </Button>
        </form>
        <div className="mt-4 rounded-lg bg-slate-50 p-3 text-xs text-slate-600">
          Demo users: student@vignan.edu / student123, driver@vignan.edu / driver123, admin@vignan.edu / admin123
        </div>
      </div>
    </div>
  )
}
