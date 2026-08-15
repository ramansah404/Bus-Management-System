import Card from '../../components/ui/Card'
import DataTable from '../../components/ui/DataTable'
import StatusBadge from '../../components/ui/StatusBadge'
import { useApp } from '../../context/AppContext'

export default function AdminStudentsPage() {
  const { students } = useApp()

  const rows = students.map((student) => ({
    ...student,
    status: student.id === 'student-2' ? 'Approved' : 'Pending',
  }))

  return (
    <Card title="Students (View / Approve / Disable)">
      <DataTable
        columns={[
          { key: 'name', label: 'Name' },
          { key: 'universityId', label: 'University ID' },
          { key: 'email', label: 'Email' },
          { key: 'status', label: 'Status', render: (value) => <StatusBadge status={value} /> },
        ]}
        rows={rows}
      />
    </Card>
  )
}
