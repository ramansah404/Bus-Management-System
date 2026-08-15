import Card from '../../components/ui/Card'
import StatusBadge from '../../components/ui/StatusBadge'
import { useApp } from '../../context/AppContext'
import { formatDateTime } from '../../utils/formatters'

export default function DriverTripPage() {
  const { trip, currentBus, startTrip, endTrip } = useApp()

  return (
    <Card title="Trip">
      <div className="space-y-3 text-sm">
        <p>
          Current status: <StatusBadge status={trip.status} />
        </p>
        <p>Demo location sharing: {trip.active ? 'Enabled' : 'Disabled'}</p>
        <p>Current coordinates: {currentBus.position.join(', ')}</p>
        <p>Last updated: {formatDateTime(currentBus.lastUpdated)}</p>
        <div className="flex gap-2">
          <button className="rounded-lg bg-emerald-600 px-3 py-2 font-semibold text-white" onClick={startTrip} type="button">
            Start Trip
          </button>
          <button className="rounded-lg bg-rose-600 px-3 py-2 font-semibold text-white" onClick={endTrip} type="button">
            End Trip
          </button>
        </div>
      </div>
    </Card>
  )
}
