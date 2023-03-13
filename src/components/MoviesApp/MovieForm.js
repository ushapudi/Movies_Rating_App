import React from "react";

import { useState } from "react";

import { add_Movie } from "../../actions/moviesActions";

import { useDispatch } from "react-redux";

const MovieForm = (props) => {
  const dispatch = useDispatch();

  const [movie, setMovie] = useState("");
  const [ranking, setRanking] = useState("");
  const [year, setYear] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const errors = {};

  const runValidations = () => {
    if (movie.length === 0) {
      errors.movie = "Movie cannot be blank";
    }
    if (ranking.length === 0) {
      errors.title = "Ranking cannot be blank";
    } else if (ranking > 10) {
      errors.title = "Ranking cannot be greater than 10..";
    }
    if (year.length === 0) {
      errors.year = "Year cannot be blank";
    } else if (year < 1900) {
      errors.year = "Year should not be less than 1900";
    }
  };
  const handleMovieChange = (e) => {
    setMovie(e.target.value);
  };
  const handleRankingChange = (e) => {
    setRanking(e.target.value);
  };
  const handleYearChange = (e) => {
    setYear(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    runValidations();

    if (Object.keys(errors).length === 0) {
      setFormErrors({});

      const movieList = {
        id: Number(new Date()),
        movieValue: movie,
        rankingValue: Number(ranking),
        yearValue: Number(year),
      };

      dispatch(add_Movie(movieList));
      setMovie("");
      setRanking("");
      setYear("");
    } else {
      setFormErrors(errors);
    }
  };
  return (
    <div
      className="shadow p-3 mb-5 bg-white-rounded"
      style={{ marginBottom: "60px" }}
    >
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={movie}
            onChange={handleMovieChange}
            placeholder="Enter movie name"
            className="form-control"
          />
          {formErrors.movie && (
            <span className="text-danger">
              <b>{formErrors.movie}</b>
            </span>
          )}
        </div>

        <div className="form-group">
          <input
            type="text"
            value={ranking}
            onChange={handleRankingChange}
            placeholder="IMDB Ranking"
            className="form-control"
          />
          {formErrors.title && (
            <span className="text-danger">
              <b>{formErrors.title}</b>
            </span>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            value={year}
            onChange={handleYearChange}
            placeholder="Year of Release"
            className="form-control"
          />
          {formErrors.year && (
            <span className="text-danger">
              <b>{formErrors.year}</b>
            </span>
          )}
        </div>
        {/* <input type="submit" value="Add" /> */}
        <button className="btn btn-primary btn-sm" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default MovieForm;
