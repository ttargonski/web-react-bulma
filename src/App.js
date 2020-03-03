import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Faq from "./components/Faq";
import About from "./components/About";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Route exact={true} path="/" component={Home}></Route>
      <Route path={"/about"} component={About}></Route>
      <Route path={"/faq"} component={Faq}></Route>
      <Footer />
    </div>
  );
};

export default App;
