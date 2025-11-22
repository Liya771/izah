export function calculateDiscount(subtotal) {
  if (subtotal >= 399) return { rate: 0.20, amount: Math.round(subtotal * 0.20) };
  if (subtotal >= 299) return { rate: 0.10, amount: Math.round(subtotal * 0.10) };
  return { rate: 0, amount: 0 };
}

export const fmtINR = n => '₹' + n;
