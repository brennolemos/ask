import React, { useState, useEffect } from "react";

const Question = (props) => {
  const id = props.match.params.id;
  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/question/${id}`)
      .then((data) => data.json())
      .then((res) => setResponse(res));
  },[]);

  return (
    <div className="container">
      <h1>{response && response.title}</h1>
      <p>{response && response.description}</p>
      <hr/>
    </div>
  );
};

export default Question;
