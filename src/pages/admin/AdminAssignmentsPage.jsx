import Card from '../../components/ui/Card'
import DataTable from '../../components/ui/DataTable'
import { useApp } from '../../context/AppContext'

export default function AdminAssignmentsPage() {
  const { students, drivers, buses, routes } = useApp()

  const rows = buses.map((bus) => ({
    id: bus.id,
    bus: bus.number,
    driver: drivers.find((driver) => driver.id === bus.driverId)?.name ?? '-',
    route: routes.find((route) => route.id === bus.routeId)?.name ?? '-',
    student: students.find((student) => student.assignedBusId === bus.id)?.name ?? '-',
  }))

  return (
    <Card title="Assignments (Student→Bus / Driver→Bus / Bus→Route)">
      <DataTable
        columns={[
          { key: 'student', label: 'Assigned Student' },
          { key: 'driver', label: 'Assigned Driver' },
          { key: 'bus', label: 'Bus' },
          { key: 'route', label: 'Route' },
        ]}
        rows={rows}
      />
    </Card>
  )
}
