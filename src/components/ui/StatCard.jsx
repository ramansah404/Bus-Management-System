export default function StatCard({ label, value }) {
  return (
    <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
      <p className="text-sm text-slate-600">{label}</p>
      <p className="mt-2 text-2xl font-bold text-blue-700">{value}</p>
    </div>
  )
}
