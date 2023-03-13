import React from "react";
import { useSelector } from "react-redux";

const MovieStats = (props) => {
  const movies = useSelector((state) => {
    return state.movies;
  });
  const topRankedMovie = () => {
    let max = 0;
    const result = movies.map((ele) => {
      if (ele.rankingValue > max) {
        max = ele.rankingValue;
      }
    });
    return movies.map((ele) => {
      if (max === ele.rankingValue) {
        return `${ele.movieValue} - ${ele.rankingValue}`;
      }
    });
  };
  return (
    <div className="border rounded shadow p-3 mb-5 bg-white-rounded">
      <h2>Movie Stats</h2>
      <h3>Total Movies - {movies.length}</h3>
      {movies.length > 0 && <b>Top Ranked Movie - {topRankedMovie()}</b>}
    </div>
  );
};

export default MovieStats;
