const format = (value, currency) => {
  return value.toLocaleString('es-AR', {
    style: 'currency',
    currency,
    currencyDisplay: 'symbol',
    minimumFractionDigits: 0,
  });
};

export default format;
