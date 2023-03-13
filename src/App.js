import React from "react";
import MoviesContainer from "./components/MoviesApp/MoviesContainer";

function App(props) {
  return (
    <div>
      <em>
        <h2 style={{ margin: "10px 10px 10px 10px" }}>My Big Movie List</h2>
      </em>
      <MoviesContainer />
    </div>
  );
}

export default App;
