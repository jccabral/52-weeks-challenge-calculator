export function toCurrencyFormat(value) {
  const intl = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  return intl.format(value);
}