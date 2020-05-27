import React from "react";
import { Link } from "react-router-dom";

const QuestionList = (props) => (
  <div className="container">
    <div className="d-flex justify-content-between align-items-center">
      <h1>Questions</h1>
      <Link to="/question" className="btn btn-primary">
        Perguntar
      </Link>
    </div>
    <hr />
    {props.questions.map((question) => (
      <div className="card my-3">
        <div className="card-body">
          <h3>{question.title}</h3>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">Responder</button>
        </div>
      </div>
    ))}
  </div>
);

export default QuestionList;
