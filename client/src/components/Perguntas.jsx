import React from "react";

const Perguntas = () => (
  <div className="container">
    <div className="card">
      <div className="card-header">
        <h3>Realizar Pergunta</h3>
      </div>

      <div className="card-body">
        <form action="">
          <div className="form-row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="">Título</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Título"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="">Descrição</label>
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
    </div>
  </div>
);

export default Perguntas;
