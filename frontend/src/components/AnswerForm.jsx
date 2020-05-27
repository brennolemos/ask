import React from "react";

const AnswerForm = () => (
  <>
    <h3>Responda</h3>
    <textarea
      className="form-control mb-3"
      name="body"
      id="body"
      cols="10"
      rows="5"
    ></textarea>
    <button type="submit" className="btn btn-success">Responder</button>
  </>
);

export default AnswerForm;
