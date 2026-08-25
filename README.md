# Order Summary — Little Sprout Co.

A small internal widget for viewing orders, filtering by status, and seeing fulfilled revenue + pending count at a glance.

## Running it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build a static production bundle: `npm run build` (output lands in `dist/`).

## Decisions

- **React over plain JS**: the brief marked React as preferred, and this widget has real derived state (filtered list, computed totals) that's a natural fit for component state + `useMemo`, rather than manual DOM diffing.
- **Order total isn't stored — it's computed**: each order's total is derived from `items` (`qty * price`) in `utils.js`, so if the data source changes the totals stay correct automatically instead of drifting out of sync.
- **Edge cases**: the total/item-count helpers guard against a missing or malformed `items` array (defaults to `0` instead of throwing), and the table shows an explicit "No orders match this filter" state rather than an empty table when a filter returns nothing.
- **Visual direction**: since this is for a baby clothing brand, I leaned into a warm, soft palette (cream background, sage/blush/butter accent colors for the three statuses) with a serif display face (Fraunces) for headings and a monospace face for order IDs/numbers, so the data still reads clearly against the softer brand feel.

## Data

Orders are static JSON at `src/data/orders.json` — no backend, as specified in the brief.
