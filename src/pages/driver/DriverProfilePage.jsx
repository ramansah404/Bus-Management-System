import Card from '../../components/ui/Card'
import { useApp } from '../../context/AppContext'

export default function DriverProfilePage() {
  const { driver } = useApp()
  return (
    <Card title="Profile">
      <dl className="grid gap-3 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-slate-500">Name</dt>
          <dd className="font-semibold">{driver.name}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Role</dt>
          <dd className="font-semibold">Driver</dd>
        </div>
        <div>
          <dt className="text-slate-500">Email</dt>
          <dd className="font-semibold">{driver.email}</dd>
        </div>
        <div>
          <dt className="text-slate-500">License</dt>
          <dd className="font-semibold">{driver.licenseNo}</dd>
        </div>
      </dl>
    </Card>
  )
}
