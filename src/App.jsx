import React from "react";
import ReactDOM from "react-dom";
import Header from "container/Header";
import Footer from "container/Footer";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header/>
    <div>Fulfillment</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
