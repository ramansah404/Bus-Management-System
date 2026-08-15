import { Link } from 'react-router-dom'
import NotificationList from '../../components/notifications/NotificationList'
import Card from '../../components/ui/Card'
import StatCard from '../../components/ui/StatCard'
import StatusBadge from '../../components/ui/StatusBadge'
import { useApp } from '../../context/AppContext'

export default function StudentDashboard() {
  const { auth, currentBus, currentRoute, notifications, complaints, markNotificationAsRead } = useApp()

  const studentComplaints = complaints.filter((item) => item.studentId === auth.userId)

  return (
    <div className="space-y-4">
      <Card title={`Welcome ${auth.name}`}>
        <p className="text-sm text-slate-600">Assigned route and live trip details are shown below.</p>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard label="Assigned Bus" value={currentBus.number} />
        <StatCard label="Route" value={currentRoute.name} />
        <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
          <p className="text-sm text-slate-600">Current Status</p>
          <div className="mt-2">
            <StatusBadge status={currentBus.status} />
          </div>
          <p className="mt-2 text-sm text-slate-600">Next Stop: {currentBus.nextStop}</p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card
          action={
            <Link className="text-sm font-semibold text-blue-600" to="/student/live-map">
              Open Live Map
            </Link>
          }
          title="Approximate Schedule"
        >
          <ul className="space-y-2 text-sm text-slate-700">
            {currentRoute.stops.map((stop) => (
              <li className="flex justify-between" key={stop.id}>
                <span>{stop.name}</span>
                <span>{stop.time}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Complaint Status">
          <div className="space-y-2">
            {studentComplaints.slice(0, 3).map((item) => (
              <div className="flex items-center justify-between text-sm" key={item.id}>
                <p>{item.category}</p>
                <StatusBadge status={item.status} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      <NotificationList
        notifications={notifications.slice(0, 3)}
        onMarkRead={markNotificationAsRead}
        userId={auth.userId}
      />
    </div>
  )
}
