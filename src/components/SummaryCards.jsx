import { formatCurrency } from '../utils'

export default function SummaryCards({ fulfilledRevenue, pendingCount }) {
  return (
    <div className="summary-row">
      <div className="summary-card revenue">
        <p className="summary-label">Fulfilled revenue</p>
        <p className="summary-value">{formatCurrency(fulfilledRevenue)}</p>
        <p className="summary-hint">Sum of fulfilled orders only</p>
      </div>
      <div className="summary-card pending">
        <p className="summary-label">Pending orders</p>
        <p className="summary-value">{pendingCount}</p>
        <p className="summary-hint">Awaiting fulfillment</p>
      </div>
    </div>
  )
}
