import BusMap from '../../components/map/BusMap'
import NotificationList from '../../components/notifications/NotificationList'
import Card from '../../components/ui/Card'
import StatCard from '../../components/ui/StatCard'
import StatusBadge from '../../components/ui/StatusBadge'
import { useApp } from '../../context/AppContext'

export default function AdminDashboard() {
  const { auth, buses, students, drivers, routes, complaints, notifications, markNotificationAsRead, trip } = useApp()

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Total Students" value={students.length} />
        <StatCard label="Total Drivers" value={drivers.length} />
        <StatCard label="Total Buses" value={buses.length} />
        <StatCard label="Active Trips" value={trip.active ? 1 : 0} />
        <StatCard label="Pending Complaints" value={complaints.filter((item) => item.status === 'Pending').length} />
        <StatCard label="Active Routes" value={routes.length} />
      </div>

      <BusMap buses={buses} routes={routes} />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Recent Complaints">
          <div className="space-y-2 text-sm">
            {complaints.slice(0, 3).map((item) => (
              <div className="flex items-center justify-between" key={item.id}>
                <span>{item.category}</span>
                <StatusBadge status={item.status} />
              </div>
            ))}
          </div>
        </Card>

        <NotificationList
          notifications={notifications.slice(0, 3)}
          onMarkRead={markNotificationAsRead}
          userId={auth.userId}
        />
      </div>
    </div>
  )
}
