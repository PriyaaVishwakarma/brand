import { orderTotal, itemCount, formatCurrency } from '../utils'

export default function OrderTable({ orders }) {
  if (orders.length === 0) {
    return (
      <div className="table-wrap">
        <div className="empty-state">No orders match this filter.</div>
      </div>
    )
  }

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className="order-id">{order.id}</td>
              <td className="customer-name">{order.customer}</td>
              <td className="items-count">{itemCount(order)}</td>
              <td className="total-cell">{formatCurrency(orderTotal(order))}</td>
              <td>
                <span className={`status-badge status-${order.status}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
