import { useMemo, useState } from 'react'
import ordersData from './data/orders.json'
import SummaryCards from './components/SummaryCards'
import StatusFilter from './components/StatusFilter'
import OrderTable from './components/OrderTable'
import { orderTotal } from './utils'

export default function App() {
  const [statusFilter, setStatusFilter] = useState('all')

  const { fulfilledRevenue, pendingCount } = useMemo(() => {
    let revenue = 0
    let pending = 0
    for (const order of ordersData) {
      if (order.status === 'fulfilled') revenue += orderTotal(order)
      if (order.status === 'pending') pending += 1
    }
    return { fulfilledRevenue: revenue, pendingCount: pending }
  }, [])

  const visibleOrders = useMemo(() => {
    if (statusFilter === 'all') return ordersData
    return ordersData.filter((o) => o.status === statusFilter)
  }, [statusFilter])

  return (
    <div className="page">
      <header className="header">
        <div className="brand-mark">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <circle cx="15" cy="15" r="14" stroke="#7C9473" strokeWidth="1.5" />
            <path d="M10 13c0-2.5 2-4.5 5-4.5s5 2 5 4.5-2 8-5 8-5-5.5-5-8z" fill="#E7EEE2" stroke="#7C9473" strokeWidth="1.3" />
          </svg>
          <span className="brand-name">Little Sprout Co.</span>
        </div>
      </header>

      <h1 className="page-title">Order summary</h1>
      <p className="page-subtitle">A quick look at where every order stands today.</p>

      <div style={{ height: 28 }} />

      <SummaryCards fulfilledRevenue={fulfilledRevenue} pendingCount={pendingCount} />

      <StatusFilter value={statusFilter} onChange={setStatusFilter} />
      <OrderTable orders={visibleOrders} />

      <p className="footer-note">
        Showing {visibleOrders.length} of {ordersData.length} orders
      </p>
    </div>
  )
}
