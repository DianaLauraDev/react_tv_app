import { useState, useContext } from "react";

//Context
import ShowsContext from "../context/shows/showsContext";

//Components
import Alert from "/Alert";

const Searchbar = () => {
  const [searchKeyword, setKeyword] = useState("");
  const { searchShows } = useContext(ShowsContext);

  const onSearchHandler = (e) => {
    e.preventDefault();

    searchShows(searchKeyword);
  };

  return (
    <div className="searchbar">
      <form className="searchbar__form">
        <input
          type="text"
          placeholder="¿Qué quieres ver hoy?"
          value={searchKeyword}
          onChange={(e) => setKeyword(e.target.value)}
        ></input>
        <button className="btn btn-block" onClick={onSearchHandler}>
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
