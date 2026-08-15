import Card from '../../components/ui/Card'
import { useApp } from '../../context/AppContext'

export default function MyRoutePage() {
  const { currentRoute, currentBus } = useApp()

  return (
    <Card title="My Route">
      <p className="mb-3 text-sm text-slate-600">{currentRoute.name}</p>
      <div className="space-y-2">
        {currentRoute.stops.map((stop, index) => (
          <div className="flex items-center justify-between rounded-lg border border-slate-200 p-3" key={stop.id}>
            <span className="font-medium text-slate-800">
              {index + 1}. {stop.name}
            </span>
            <span className="text-sm text-slate-500">{stop.time}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-slate-600">Current/Next Stop: {currentBus.nextStop}</p>
    </Card>
  )
}
