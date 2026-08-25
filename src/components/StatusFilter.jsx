const OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'pending', label: 'Pending' },
  { value: 'fulfilled', label: 'Fulfilled' },
  { value: 'cancelled', label: 'Cancelled' },
]

export default function StatusFilter({ value, onChange }) {
  return (
    <div className="filter-row" role="group" aria-label="Filter orders by status">
      <span className="filter-label">Status</span>
      {OPTIONS.map((opt) => (
        <button
          key={opt.value}
          type="button"
          className={`filter-pill${value === opt.value ? ' active' : ''}`}
          aria-pressed={value === opt.value}
          onClick={() => onChange(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
