import NotificationList from '../../components/notifications/NotificationList'
import { useApp } from '../../context/AppContext'

export default function StudentNotificationsPage() {
  const { auth, notifications, markNotificationAsRead } = useApp()
  return (
    <NotificationList
      notifications={notifications}
      onMarkRead={markNotificationAsRead}
      userId={auth.userId}
    />
  )
}
