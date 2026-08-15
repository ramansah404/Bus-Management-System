import Card from '../../components/ui/Card'
import StatusBadge from '../../components/ui/StatusBadge'
import { useApp } from '../../context/AppContext'

export default function MyBusPage() {
  const { currentBus, currentRoute } = useApp()

  return (
    <Card title="My Bus">
      <dl className="grid gap-3 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-slate-500">Bus Number</dt>
          <dd className="font-semibold">{currentBus.number}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Registration Number</dt>
          <dd className="font-semibold">{currentBus.registrationNumber}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Driver Name</dt>
          <dd className="font-semibold">{currentBus.driverName}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Route</dt>
          <dd className="font-semibold">{currentRoute.name}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Capacity</dt>
          <dd className="font-semibold">{currentBus.capacity}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Current Status</dt>
          <dd>
            <StatusBadge status={currentBus.status} />
          </dd>
        </div>
      </dl>
    </Card>
  )
}
