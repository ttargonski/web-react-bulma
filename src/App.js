import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Faq from "./components/Faq";
import About from "./components/About";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";

const ErrorPage = () => (
  <div className="section">
    <div className="container">
      <h1 className="title">404</h1>
      <p className="subtitle">Strona nie istnieje</p>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Route exact={true} path="/home" component={Home}></Route>
      <Route path={"/about"} component={About}></Route>
      <Route path={"/faq"} component={Faq}></Route>
      <Route component={ErrorPage} />
      <Footer />
    </div>
  );
};

export default App;
