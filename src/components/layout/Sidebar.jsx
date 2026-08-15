import { NavLink } from 'react-router-dom'

export default function Sidebar({ links }) {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white p-4 lg:block">
      <h1 className="mb-6 text-lg font-bold text-blue-700">SMART BUS</h1>
      <nav className="space-y-1">
        {links.map((link) => (
          <NavLink
            className={({ isActive }) =>
              `block rounded-lg px-3 py-2 text-sm font-medium ${
                isActive ? 'bg-blue-100 text-blue-700' : 'text-slate-600 hover:bg-slate-100'
              }`
            }
            key={link.path}
            to={link.path}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
