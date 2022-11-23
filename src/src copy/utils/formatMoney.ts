export function formatMoney(value: number) {
  if(!value) {
    throw Error ("Value is null")
  }
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });
}