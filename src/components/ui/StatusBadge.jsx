const colorMap = {
  Active: 'bg-emerald-100 text-emerald-700',
  Inactive: 'bg-slate-100 text-slate-700',
  Delayed: 'bg-amber-100 text-amber-700',
  Completed: 'bg-blue-100 text-blue-700',
  Pending: 'bg-orange-100 text-orange-700',
  'In Review': 'bg-violet-100 text-violet-700',
  Resolved: 'bg-emerald-100 text-emerald-700',
  Approved: 'bg-emerald-100 text-emerald-700',
  Disabled: 'bg-rose-100 text-rose-700',
}

export default function StatusBadge({ status }) {
  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${colorMap[status] ?? 'bg-slate-100 text-slate-700'}`}>
      {status}
    </span>
  )
}
