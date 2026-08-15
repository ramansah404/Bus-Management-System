import Card from '../../components/ui/Card'
import { useApp } from '../../context/AppContext'

export default function StudentProfilePage() {
  const { auth, student } = useApp()

  return (
    <Card title="Profile">
      <dl className="grid gap-3 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-slate-500">Name</dt>
          <dd className="font-semibold">{auth.name}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Role</dt>
          <dd className="font-semibold">Student</dd>
        </div>
        <div>
          <dt className="text-slate-500">University ID</dt>
          <dd className="font-semibold">{student.universityId}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Email</dt>
          <dd className="font-semibold">{student.email}</dd>
        </div>
      </dl>
    </Card>
  )
}
