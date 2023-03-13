import React from "react";
import MoviesList from "./MoviesList";
import MovieForm from "./MovieForm";
import MovieStats from "./MovieStats";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const MoviesContainer = (props) => {
  return (
    <div className="row">
      <div className="col-md-7">
        <MoviesList />
      </div>
      <div className="col-md-4">
        <MovieForm />
        <MovieStats />
      </div>
    </div>
  );
};
export default MoviesContainer;
