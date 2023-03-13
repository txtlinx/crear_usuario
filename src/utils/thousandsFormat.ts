export const thousandsFormat = (n: string | number, d: number = 0) => {
  n = new Intl.NumberFormat('es-ES').format(
    parseFloat(parseFloat(n.toString()).toFixed(d))
  );
  if (d > 0) {
    const decimals = n.indexOf(',') > -1 ? n.length - 1 - n.indexOf(',') : 0;
    n = decimals === 0 ? n + ',' + '0'.repeat(d) : n + '0'.repeat(d - decimals);
  }
  return n;
};
