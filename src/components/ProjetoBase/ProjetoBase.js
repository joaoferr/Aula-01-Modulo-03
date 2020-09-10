import React, { Component } from 'react';
import { calculaJurosComposto } from '../../calculaJurosComposto';

export default class ProjetoBase extends Component {
  handleChange = () => {
    const calculo = calculaJurosComposto(60000, -2.5, 10);
    console.log(calculo);

    this.setState({
      montante: calculo.montante,
      mes: calculo.mes,
      diferencial: calculo.diferencial,
      percentDiferencial: calculo.percentDiferencial,
    });
  };

  render() {
    //   const { montante, mes, diferencial, percentDiferencial } = this.state;

    return (
      <div>
        <input type="number" name="capital" onKeyUp={this.handleChange} />
        <input type="number" name="taxaFixa" onKeyUp={this.handleChange} />
        <input type="number" name="periodo" onKeyUp={this.handleChange} />
      </div>
    );
  }
}
