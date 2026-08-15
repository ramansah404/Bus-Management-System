import { Navigate, Route, Routes } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import AppLayout from '../layouts/AppLayout'
import AdminAssignmentsPage from '../pages/admin/AdminAssignmentsPage'
import AdminBusesPage from '../pages/admin/AdminBusesPage'
import AdminComplaintsPage from '../pages/admin/AdminComplaintsPage'
import AdminDashboard from '../pages/admin/AdminDashboard'
import AdminDriversPage from '../pages/admin/AdminDriversPage'
import AdminLiveMapPage from '../pages/admin/AdminLiveMapPage'
import AdminNotificationsPage from '../pages/admin/AdminNotificationsPage'
import AdminRoutesPage from '../pages/admin/AdminRoutesPage'
import AdminSchedulesPage from '../pages/admin/AdminSchedulesPage'
import AdminStopsPage from '../pages/admin/AdminStopsPage'
import AdminStudentsPage from '../pages/admin/AdminStudentsPage'
import DriverDashboard from '../pages/driver/DriverDashboard'
import DriverMyBusPage from '../pages/driver/DriverMyBusPage'
import DriverMyRoutePage from '../pages/driver/DriverMyRoutePage'
import DriverProfilePage from '../pages/driver/DriverProfilePage'
import DriverTripPage from '../pages/driver/DriverTripPage'
import LoginPage from '../pages/public/LoginPage'
import StudentComplaintsPage from '../pages/student/StudentComplaintsPage'
import StudentDashboard from '../pages/student/StudentDashboard'
import StudentLiveMapPage from '../pages/student/StudentLiveMapPage'
import StudentNotificationsPage from '../pages/student/StudentNotificationsPage'
import StudentProfilePage from '../pages/student/StudentProfilePage'
import TimetablePage from '../pages/student/TimetablePage'
import MyBusPage from '../pages/student/MyBusPage'
import MyRoutePage from '../pages/student/MyRoutePage'
import ProtectedRoute from './ProtectedRoute'
import { defaultDashboardByRole } from './navConfig'

function LandingRedirect() {
  const { auth } = useApp()

  if (!auth?.isLoggedIn) {
    return <Navigate replace to="/login" />
  }

  return <Navigate replace to={defaultDashboardByRole[auth.role]} />
}

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<LandingRedirect />} path="/" />
      <Route element={<LoginPage />} path="/login" />

      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route element={<ProtectedRoute allowedRole="student" />}>
            <Route element={<StudentDashboard />} path="/student/dashboard" />
            <Route element={<MyBusPage />} path="/student/my-bus" />
            <Route element={<MyRoutePage />} path="/student/my-route" />
            <Route element={<StudentLiveMapPage />} path="/student/live-map" />
            <Route element={<TimetablePage />} path="/student/timetable" />
            <Route element={<StudentNotificationsPage />} path="/student/notifications" />
            <Route element={<StudentComplaintsPage />} path="/student/complaints" />
            <Route element={<StudentProfilePage />} path="/student/profile" />
          </Route>

          <Route element={<ProtectedRoute allowedRole="driver" />}>
            <Route element={<DriverDashboard />} path="/driver/dashboard" />
            <Route element={<DriverMyBusPage />} path="/driver/my-bus" />
            <Route element={<DriverMyRoutePage />} path="/driver/my-route" />
            <Route element={<DriverTripPage />} path="/driver/trip" />
            <Route element={<DriverProfilePage />} path="/driver/profile" />
          </Route>

          <Route element={<ProtectedRoute allowedRole="admin" />}>
            <Route element={<AdminDashboard />} path="/admin/dashboard" />
            <Route element={<AdminStudentsPage />} path="/admin/students" />
            <Route element={<AdminDriversPage />} path="/admin/drivers" />
            <Route element={<AdminBusesPage />} path="/admin/buses" />
            <Route element={<AdminRoutesPage />} path="/admin/routes" />
            <Route element={<AdminStopsPage />} path="/admin/stops" />
            <Route element={<AdminSchedulesPage />} path="/admin/schedules" />
            <Route element={<AdminAssignmentsPage />} path="/admin/assignments" />
            <Route element={<AdminComplaintsPage />} path="/admin/complaints" />
            <Route element={<AdminNotificationsPage />} path="/admin/notifications" />
            <Route element={<AdminLiveMapPage />} path="/admin/live-map" />
          </Route>
        </Route>
      </Route>

      <Route element={<LandingRedirect />} path="*" />
    </Routes>
  )
}
