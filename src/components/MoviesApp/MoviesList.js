import React from "react";
import MoviesCard from "./MoviesCard";
import { useSelector } from "react-redux";
import { useState } from "react";
import { sortBy } from "lodash";
const MoviesList = (props) => {
  const [search, setSearch] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [toggle, setToggle] = useState(false);

  let movies = useSelector((state) => {
    return state.movies;
  });
  console.log(movies);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleOrderChange = (e) => {
    setOrderBy(e.target.value);
  };
  if (orderBy === "name") {
    movies = sortBy(movies, [
      function (movie) {
        return movie.movieValue;
      },
    ]);
  } else if (orderBy === "ranking") {
    movies = sortBy(movies, [
      function (movie) {
        return movie.rankingValue;
      },
    ]);
  }
  if (search.length > 0) {
    movies = movies.filter((ele) => {
      return ele.movieValue.toLowerCase().match(search.toLowerCase());
    });
  }
  return (
    <div className="col">
      <h4 style={{ margin: "10px 10px 10px 0" }}>
        Favourite Movies({movies.length})
      </h4>
      <div className="row">
        <input
          className="form-control shadow-sm"
          style={{
            width: "53%",
            marginRight: "25px",
            marginLeft: "10px",
            height: "25px",
          }}
          type="text"
          placeholder="Search by name..."
          onChange={handleSearch}
          value={search}
        />
        <select
          style={{ width: "20%", height: "25px" }}
          className="form-control shadow-sm"
          value={orderBy}
          onChange={handleOrderChange}
          style={{ width: "121px", height: "20px" }}
        >
          <option value="orderby" selected>
            order by
          </option>
          <option value="name">name</option>
          <option value="ranking">ranking</option>
        </select>
      </div>
      <div className="row">
        {movies.map((ele) => {
          return <MoviesCard key={ele.id} {...ele} />;
        })}
      </div>
    </div>
  );
};
export default MoviesList;
