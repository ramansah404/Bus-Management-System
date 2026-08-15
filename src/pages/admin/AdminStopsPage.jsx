import Card from '../../components/ui/Card'
import DataTable from '../../components/ui/DataTable'
import { useApp } from '../../context/AppContext'

export default function AdminStopsPage() {
  const { routes } = useApp()

  const rows = routes.flatMap((route) => route.stops.map((stop) => ({ ...stop, route: route.name })))

  return (
    <Card title="Stops (Add / Edit / Remove)">
      <DataTable
        columns={[
          { key: 'name', label: 'Stop' },
          { key: 'route', label: 'Route' },
          { key: 'time', label: 'Stop Time' },
        ]}
        rows={rows}
      />
    </Card>
  )
}
