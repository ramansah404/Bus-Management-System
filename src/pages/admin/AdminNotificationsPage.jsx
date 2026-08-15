import { useState } from 'react'
import NotificationList from '../../components/notifications/NotificationList'
import Card from '../../components/ui/Card'
import { useApp } from '../../context/AppContext'

export default function AdminNotificationsPage() {
  const { auth, notifications, markNotificationAsRead, publishNotification } = useApp()
  const [form, setForm] = useState({ title: '', message: '', audience: 'all' })

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.title.trim() || !form.message.trim()) return
    publishNotification(form)
    setForm({ title: '', message: '', audience: 'all' })
  }

  return (
    <div className="space-y-4">
      <Card title="Create Announcement">
        <form className="space-y-2" onSubmit={handleSubmit}>
          <input
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
            onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
            placeholder="Title"
            value={form.title}
          />
          <textarea
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
            onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
            placeholder="Announcement message"
            rows={3}
            value={form.message}
          />
          <select
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
            onChange={(event) => setForm((prev) => ({ ...prev, audience: event.target.value }))}
            value={form.audience}
          >
            <option value="all">All Users</option>
            <option value="student">Students</option>
            <option value="driver">Drivers</option>
          </select>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white" type="submit">
            Publish
          </button>
        </form>
      </Card>

      <NotificationList
        notifications={notifications}
        onMarkRead={markNotificationAsRead}
        showAction={false}
        userId={auth.userId}
      />
    </div>
  )
}
