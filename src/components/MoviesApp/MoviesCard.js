import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove_Movie } from "../../actions/moviesActions";

const MoviesCard = (props) => {
  const dispatch = useDispatch();
  const { id, movieValue, rankingValue, yearValue } = props;
  const handleRemove = (id) => {
    const confirmRemove = window.confirm(
      `Are you sure to remove ${movieValue} from your favourite IMDB list`
    );

    if (confirmRemove) {
      dispatch(remove_Movie(id));
    }
  };
  return (
    <div
      className="card-shadow-sm col-md-4"
      style={{ width: "15rem", margin: "10px 10px 10px 30px" }}
    >
      <div className="row card-body">
        <img src="https://via.placeholder.com/130" alt=""></img>
        <h2>
          {movieValue}({yearValue}) #{rankingValue}
        </h2>
        <button
          onClick={() => {
            handleRemove(id);
          }}
          className="btn btn-danger"
        >
          remove
        </button>
      </div>
    </div>
  );
};
export default MoviesCard;
