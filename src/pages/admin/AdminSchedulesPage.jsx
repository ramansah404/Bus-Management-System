import Card from '../../components/ui/Card'
import DataTable from '../../components/ui/DataTable'
import { useApp } from '../../context/AppContext'

export default function AdminSchedulesPage() {
  const { schedules, routes } = useApp()

  const rows = schedules.map((schedule) => ({
    ...schedule,
    route: routes.find((route) => route.id === schedule.routeId)?.name ?? '-',
  }))

  return (
    <Card title="Schedules (Create / Edit / View)">
      <DataTable
        columns={[
          { key: 'route', label: 'Route' },
          { key: 'departure', label: 'Departure' },
          { key: 'arrival', label: 'Arrival' },
          { key: 'days', label: 'Days' },
        ]}
        rows={rows}
      />
    </Card>
  )
}
