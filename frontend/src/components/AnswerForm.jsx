import React from "react";

const AnswerForm = (props) => (
  <form method="post" action="http://localhost:5000/to-answer">
    <h3>Responda</h3>
    <textarea
      className="form-control mb-3"
      name="body"
      id="body"
      cols="10"
      rows="5"
    ></textarea>
    <input type="hidden" name="question" value={props.question} />
    <button type="submit" className="btn btn-success">
      Responder
    </button>
  </form>
);

export default AnswerForm;
