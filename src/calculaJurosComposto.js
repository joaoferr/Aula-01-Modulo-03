function calculaJurosComposto(capital, taxaFixa, periodo) {
  let listaJuros = [];
  let montante = 0;
  let diferencial = 0;
  let percentDiferencial = 0;
  let id;

  if (periodo < 1 || periodo == null) {
    periodo = 1;
  }

  for (let mes = 1; mes <= periodo; mes++) {
    id = mes - 1;
    montante =
      parseInt(capital * Math.pow(1 + taxaFixa / 100, mes) * 100) / 100;
    diferencial = parseInt((montante - capital) * 100) / 100;
    percentDiferencial = parseInt((diferencial / capital) * 100 * 100) / 100;
    listaJuros[mes] = { id, montante, mes, diferencial, percentDiferencial };
  }
  return listaJuros;
}

export { calculaJurosComposto };
