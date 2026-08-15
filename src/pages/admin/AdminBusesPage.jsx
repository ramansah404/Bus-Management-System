import Card from '../../components/ui/Card'
import DataTable from '../../components/ui/DataTable'
import StatusBadge from '../../components/ui/StatusBadge'
import { useApp } from '../../context/AppContext'

export default function AdminBusesPage() {
  const { buses } = useApp()

  return (
    <Card title="Buses (Add / Edit / Remove / Status)">
      <DataTable
        columns={[
          { key: 'number', label: 'Bus' },
          { key: 'registrationNumber', label: 'Registration' },
          { key: 'driverName', label: 'Driver' },
          { key: 'capacity', label: 'Capacity' },
          { key: 'status', label: 'Status', render: (value) => <StatusBadge status={value} /> },
        ]}
        rows={buses}
      />
    </Card>
  )
}
