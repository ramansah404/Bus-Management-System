import Card from '../../components/ui/Card'
import DataTable from '../../components/ui/DataTable'
import { useApp } from '../../context/AppContext'

export default function AdminRoutesPage() {
  const { routes } = useApp()

  return (
    <Card title="Routes (Add / Edit / View)">
      <DataTable
        columns={[
          { key: 'name', label: 'Route Name' },
          {
            key: 'stops',
            label: 'Stops',
            render: (value) => value.map((stop) => stop.name).join(' → '),
          },
        ]}
        rows={routes}
      />
    </Card>
  )
}
