import React from "react";

const Perguntas = () => (
  <div className="container">
    <div className="card">
      <div className="card-header">
        <h3>Realizar Pergunta</h3>
      </div>

      <div className="card-body">
        <form action="/api/savequest" method="post">
          <div className="form-row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="titulo">Título</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Título"
                  name="titulo"
                  id="titulo"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="descricao">Descrição</label>
                <textarea
                  className="form-control"
                  placeholder="Descreva sua pergunta aqui"
                  cols="30"
                  rows="5"
                  name="descricao"
                  id="descricao"
                ></textarea>
              </div>
            </div>
            <button className="btn btn-success">Perguntar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default Perguntas;
