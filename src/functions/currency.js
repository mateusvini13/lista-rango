function formatMoney(value){
  return value ? `R$ ${value.toFixed(2).toString().replace('.', ',')}` : 'Preço não registrado';
}

export { formatMoney }