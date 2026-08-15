import { useState } from 'react'
import Card from '../../components/ui/Card'
import StatusBadge from '../../components/ui/StatusBadge'
import { useApp } from '../../context/AppContext'

export default function AdminComplaintsPage() {
  const { complaints, updateComplaint } = useApp()
  const [filter, setFilter] = useState('All')

  const filtered = complaints.filter((item) => (filter === 'All' ? true : item.status === filter))

  return (
    <Card title="Complaints (View / Filter / Update / Resolution)">
      <div className="mb-3 flex gap-2">
        {['All', 'Pending', 'In Review', 'Resolved'].map((item) => (
          <button
            className={`rounded-lg px-3 py-1 text-sm font-semibold ${
              filter === item ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'
            }`}
            key={item}
            onClick={() => setFilter(item)}
            type="button"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {filtered.map((item) => (
          <article className="rounded-lg border border-slate-200 p-3" key={item.id}>
            <div className="flex items-center justify-between">
              <p className="font-semibold">{item.category}</p>
              <StatusBadge status={item.status} />
            </div>
            <p className="my-2 text-sm text-slate-600">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              <button
                className="rounded bg-violet-100 px-2 py-1 text-xs font-semibold text-violet-700"
                onClick={() => updateComplaint({ id: item.id, status: 'In Review', resolutionNote: item.resolutionNote })}
                type="button"
              >
                Mark In Review
              </button>
              <button
                className="rounded bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700"
                onClick={() => updateComplaint({ id: item.id, status: 'Resolved', resolutionNote: 'Issue reviewed and resolved.' })}
                type="button"
              >
                Resolve
              </button>
            </div>
            {item.resolutionNote ? <p className="mt-2 text-xs text-slate-500">Resolution: {item.resolutionNote}</p> : null}
          </article>
        ))}
      </div>
    </Card>
  )
}
