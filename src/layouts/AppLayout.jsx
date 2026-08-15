import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'
import { useApp } from '../context/AppContext'
import { navByRole } from '../routes/navConfig'

export default function AppLayout() {
  const { auth, logout, unreadCount } = useApp()

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-[1500px]">
        <Sidebar links={navByRole[auth.role]} />
        <div className="flex min-w-0 flex-1 flex-col">
          <Navbar name={auth.name} onLogout={logout} role={auth.role} unreadCount={unreadCount} />
          <main className="flex-1 p-4 lg:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
