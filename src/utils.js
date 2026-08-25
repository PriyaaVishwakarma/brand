// Sum of (qty * price) across every line item in an order.
// Falls back to 0 for malformed items so one bad row never breaks the table.
export function orderTotal(order) {
  if (!Array.isArray(order.items)) return 0
  return order.items.reduce((sum, item) => {
    const qty = Number(item.qty) || 0
    const price = Number(item.price) || 0
    return sum + qty * price
  }, 0)
}

// Total count of individual units in an order (not line-item count).
export function itemCount(order) {
  if (!Array.isArray(order.items)) return 0
  return order.items.reduce((sum, item) => sum + (Number(item.qty) || 0), 0)
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}
