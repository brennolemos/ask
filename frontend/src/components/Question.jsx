import React, { useState, useEffect } from "react";
import AnswerForm from "./AnswerForm";
import AnswerList from "./AnswerList";

const Question = (props) => {
  const id = props.match.params.id;
  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/question/${id}`)
      .then((data) => data.json())
      .then((res) => setResponse(res));
  }, []);

  return (
    <div className="container">
      <h1>{response && response.question.title}</h1>
      <p>{response && response.question.description}</p>
      <hr />
      {response ? <AnswerList answers={response.answers} /> : ""}
      <AnswerForm question={id} />
    </div>
  );
};

export default Question;
