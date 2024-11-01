import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  return (
 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Route>
      </Routes>
  
  );
};

export default App;
