export default function Button({ className = '', children, ...props }) {
  return (
    <button
      className={`rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400 ${className}`}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
}
