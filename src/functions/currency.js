function formatMoney(value){
  return `R$ ${value.toFixed(2).toString().replace('.', ',')}`;
}

export { formatMoney }