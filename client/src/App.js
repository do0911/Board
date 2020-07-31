import React from "react";
import Header from "./Header";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Container maxWidth="sm">
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/Board" component={Board} />
      </Router>
    </Container>
  );
}

export default App;
