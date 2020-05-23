import React from "react";

const Perguntas = () => (
  <div className="container">
    <h3>Realizar Pergunta</h3>
    <hr/>
    <form action="">
      <div className="form-row">
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="">Título</label>
            <input type="text" className="form-control" placeholder="Título" />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="">
              Descrição
            </label>
            <textarea
              className="form-control"
              placeholder="Descreva sua pergunta aqui"
              cols="30"
              rows="5"
            ></textarea>
          </div>
        </div>
        <button className="btn btn-success">Perguntar</button>
      </div>
    </form>
  </div>
);

export default Perguntas;
