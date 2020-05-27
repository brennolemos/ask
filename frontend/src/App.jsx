import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import QuestionList from "./components/QuestionList";
import QuestionForm from "./components/QuestionForm";
import Question from "./components/Question";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    callApi()
      .then((res) => setResponse(res))
      .catch((err) => console.log(err));
  });

  const callApi = async () => {
    const response = await fetch("http://localhost:5000");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    // console.log(response)

    return body;
  };

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-light bg-primary mb-3">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <h2 className="text-white">ASK</h2>
            </Link>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact>
            {response ? <QuestionList questions={response} /> : ""}
          </Route>
          <Route path="/to-ask" component={QuestionForm} />
          <Route path="/question/:id" component={Question} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
