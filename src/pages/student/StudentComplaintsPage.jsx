import { useState } from 'react'
import Card from '../../components/ui/Card'
import StatusBadge from '../../components/ui/StatusBadge'
import { useApp } from '../../context/AppContext'
import { formatDateTime } from '../../utils/formatters'

export default function StudentComplaintsPage() {
  const { auth, complaints, addComplaint } = useApp()
  const [form, setForm] = useState({ category: 'Delay', description: '' })

  const studentComplaints = complaints.filter((item) => item.studentId === auth.userId)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.description.trim()) return
    addComplaint(form)
    setForm((prev) => ({ ...prev, description: '' }))
  }

  return (
    <div className="space-y-4">
      <Card title="Create Complaint">
        <form className="space-y-3" onSubmit={handleSubmit}>
          <select
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
            onChange={(event) => setForm((prev) => ({ ...prev, category: event.target.value }))}
            value={form.category}
          >
            <option>Delay</option>
            <option>Behavior</option>
            <option>Cleanliness</option>
            <option>Safety</option>
          </select>
          <textarea
            className="w-full rounded-lg border border-slate-300 px-3 py-2"
            onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))}
            placeholder="Describe your complaint"
            rows={4}
            value={form.description}
          />
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white" type="submit">
            Submit Complaint
          </button>
        </form>
      </Card>

      <Card title="Previous Complaints">
        <div className="space-y-3">
          {studentComplaints.map((item) => (
            <article className="rounded-lg border border-slate-200 p-3" key={item.id}>
              <div className="mb-2 flex items-center justify-between">
                <p className="font-semibold">{item.category}</p>
                <StatusBadge status={item.status} />
              </div>
              <p className="text-sm text-slate-600">{item.description}</p>
              {item.resolutionNote ? <p className="mt-1 text-sm text-emerald-700">Resolution: {item.resolutionNote}</p> : null}
              <p className="mt-2 text-xs text-slate-500">{formatDateTime(item.createdAt)}</p>
            </article>
          ))}
        </div>
      </Card>
    </div>
  )
}
