export function formatCurrency(value, currency) {
  if (!value) {
    return null;
  }

  const intvalue = parseInt(value);
  const userAgentLocal = navigator.language;
  return Intl.NumberFormat(userAgentLocal ?? "en-US", {
    style: "currency",
    notation: "standard",
    currencyDisplay: "symbol",
    currency: currency ?? "USD",
  }).format(value);
}

export function formatDate(machineDateString) {
  if (!machineDateString) return null;
  const dateObj = new Date(machineDateString);
  return dateObj.toLocaleDateString(navigator.language ?? "en-S", {dateStyle:"long"});
}
