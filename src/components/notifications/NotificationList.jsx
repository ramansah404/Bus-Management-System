import Card from '../ui/Card'
import Button from '../ui/Button'
import { formatDateTime } from '../../utils/formatters'

export default function NotificationList({ notifications, userId, onMarkRead, showAction = true }) {
  return (
    <Card title="Notifications">
      <div className="space-y-3">
        {notifications.map((item) => {
          const isRead = item.readBy.includes(userId)
          return (
            <article className="rounded-lg border border-slate-200 p-3" key={item.id}>
              <div className="mb-2 flex items-start justify-between gap-2">
                <h4 className="font-semibold text-slate-800">{item.title}</h4>
                <span className={`text-xs font-semibold ${isRead ? 'text-slate-500' : 'text-blue-600'}`}>
                  {isRead ? 'Read' : 'Unread'}
                </span>
              </div>
              <p className="text-sm text-slate-600">{item.message}</p>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                <span>{formatDateTime(item.createdAt)}</span>
                {showAction && !isRead ? <Button onClick={() => onMarkRead(item.id)}>Mark as read</Button> : null}
              </div>
            </article>
          )
        })}
      </div>
    </Card>
  )
}
