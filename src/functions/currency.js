function formatMoney(value){
  return value ? `R$ ${value.toFixed(2).toString().replace('.', ',')}` : 'Sem Preço';
}

export { formatMoney }