import Card from '../../components/ui/Card'
import DataTable from '../../components/ui/DataTable'
import { useApp } from '../../context/AppContext'

export default function AdminDriversPage() {
  const { drivers } = useApp()

  return (
    <Card title="Drivers (View / Add / Edit / Disable)">
      <DataTable
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'licenseNo', label: 'License' },
        ]}
        rows={drivers}
      />
    </Card>
  )
}
