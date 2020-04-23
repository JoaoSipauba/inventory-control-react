import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Page } from "./styles";

import Login from "./pages/login/login.js";
import Home from "./pages/home/home.js";

function App() {
  return (
    <div className="App">
      <>
        <Page>
          <Router>
            <Route exact path="/" component={Login} />
            <Route exact path="/Home" component={Home} />
          </Router>
        </Page>
      </>
    </div>
  );
}

export default App;
