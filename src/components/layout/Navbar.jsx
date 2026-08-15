import { useState } from 'react'
import Button from '../ui/Button'

export default function Navbar({ name, role, unreadCount, onLogout }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
      <div>
        <p className="text-sm text-slate-500">Vignan University, Guntur</p>
        <h2 className="text-lg font-semibold text-slate-900">Smart Bus Management System</h2>
      </div>
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          Unread: {unreadCount}
        </span>
        <div className="relative">
          <button
            className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700"
            onClick={() => setOpen((prev) => !prev)}
            type="button"
          >
            {name} ({role})
          </button>
          {open ? (
            <div className="absolute right-0 z-20 mt-2 w-52 rounded-lg border border-slate-200 bg-white p-3 shadow-lg">
              <p className="text-sm font-semibold text-slate-800">Account</p>
              <p className="mb-3 text-xs text-slate-500">Logged in as {role}</p>
              <Button className="w-full" onClick={onLogout}>
                Logout
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  )
}
