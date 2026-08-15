import Card from '../../components/ui/Card'
import StatusBadge from '../../components/ui/StatusBadge'
import { useApp } from '../../context/AppContext'

export default function DriverDashboard() {
  const { driver, currentBus, currentRoute, trip, startTrip, endTrip } = useApp()

  return (
    <div className="space-y-4">
      <Card title={`Welcome ${driver.name}`}>
        <div className="grid gap-3 text-sm md:grid-cols-2">
          <p>Assigned bus: {currentBus.number}</p>
          <p>Assigned route: {currentRoute.name}</p>
          <p>Location sharing: {trip.active ? 'On (Demo)' : 'Off'}</p>
          <div>
            Current trip status: <StatusBadge status={trip.status} />
          </div>
        </div>
      </Card>

      <div className="flex flex-wrap gap-2">
        <button className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white" onClick={startTrip} type="button">
          Start Trip
        </button>
        <button className="rounded-lg bg-rose-600 px-4 py-2 text-sm font-semibold text-white" onClick={endTrip} type="button">
          End Trip
        </button>
        <button className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700" type="button">
          Report Issue
        </button>
      </div>

      <Card title="Route Stops">
        <ul className="space-y-2 text-sm">
          {currentRoute.stops.map((stop) => (
            <li className="flex justify-between" key={stop.id}>
              <span>{stop.name}</span>
              <span>{stop.time}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
