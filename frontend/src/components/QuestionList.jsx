import React from "react";
import { Link } from "react-router-dom";

const QuestionList = (props) => (
  <div className="container">
    <div className="d-flex justify-content-between align-items-center">
      <h1>Questions</h1>
      <Link to="/to-ask" className="btn btn-primary">
        Perguntar
      </Link>
    </div>
    <hr />
    {props.questions.map((question, index) => (
      <div className="card my-3" key={index}>
        <div className="card-body">
          <h3>{question.title}</h3>
        </div>
        <div className="card-footer">
          <Link to={`/question/${question.id}`} className="btn btn-primary">Responder</Link>
        </div>
      </div>
    ))}
  </div>
);

export default QuestionList;
