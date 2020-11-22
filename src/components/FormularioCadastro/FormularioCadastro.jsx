import React, { Component } from "react";
import "./estilo.css";

export default class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _hendleMudancaTitulo(evento) {
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <React.Fragment>
        <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
          <h1 className="titulo-cadastro">Bloco de notas</h1>
          <p className="subtitulo-cadastro">Insira para criar nota...</p>
          <input
            type="text"
            placeholder="Título"
            className="form-cadastro_input"
            onChange={this._hendleMudancaTitulo.bind(this)}
          />
          <textarea
            rows={15}
            className="form-cadastro_input"
            placeholder="Escreva sua nota..."
            onChange={this._handleMudancaTexto.bind(this)}
          ></textarea>
          <button className="form-cadastro_input form-cadastro_submit">
            Criar Nota
          </button>
        </form>
      </React.Fragment>
    );
  }
}
