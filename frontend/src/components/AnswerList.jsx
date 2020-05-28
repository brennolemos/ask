import React from "react";

const AnswerList = ({ answers }) => (
  <>
    <h3>Respostas</h3>
    {answers.length ? (
      answers.map((answer, index) => (
        <div className="card mb-3" key={index}>
          <div className="card-body">{answer.body}</div>
        </div>
      ))
    ) : (
      <p>Ainda não há respostas!</p>
    )}
    <hr />
  </>
);

export default AnswerList;
