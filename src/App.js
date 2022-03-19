import React from "react";
//Routing
import { Routes, Route } from "react-router-dom";
//Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

//Styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path=":movieId" element={<Movie />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </div>
);

export default App;
