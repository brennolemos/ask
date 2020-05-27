import React, { useState, useEffect } from "react";
import AnswerForm from "./AnswerForm";

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
      <h1>{response && response.title}</h1>
      <p>{response && response.description}</p>
      <hr />
      <AnswerForm />
    </div>
  );
};

export default Question;
