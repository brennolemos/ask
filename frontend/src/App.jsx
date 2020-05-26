import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Question from "./components/Question";
import QuestionForm from "./components/QuestionForm";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    callApi()
      .then((res) => setResponse(res.message))
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
            <a className="navbar-brand" href="/">
              <img src="/logo192.png" alt="" />
            </a>
          </div>
        </nav>
        <Switch>
          <Route path="/" exact>
            <Question />
          </Route>
          <Route path="/savequest" component={QuestionForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
