// How often the orders and dashboard pages re-fetch orders from the API.
// Shared so the two pages can't drift apart — keep it modest: every open
// admin tab hits /admin/orders at this rate.
export const ORDERS_POLL_INTERVAL_MS = 15_000;
