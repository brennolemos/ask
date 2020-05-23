import React, { useState, useEffect } from "react";
import Perguntas from "./components/Perguntas";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    callApi()
      .then((res) => setResponse(res.express))
      .catch((err) => console.log(err));
  }, []);

  const callApi = async () => {
    const response = await fetch("/api");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  return (
    <div className="App">
      <Perguntas />
      <p className="App-intro">{response ? response : ""}</p>
    </div>
  );
};

export default App;
