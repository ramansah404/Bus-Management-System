import { Navigate, Outlet } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { defaultDashboardByRole } from './navConfig'

export default function ProtectedRoute({ allowedRole }) {
  const { auth } = useApp()

  if (!auth?.isLoggedIn) {
    return <Navigate replace to="/login" />
  }

  if (allowedRole && auth.role !== allowedRole) {
    return <Navigate replace to={defaultDashboardByRole[auth.role]} />
  }

  return <Outlet />
}
