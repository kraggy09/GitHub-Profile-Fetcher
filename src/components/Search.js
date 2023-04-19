import { useState } from "react";
import Details from "./Details";
const Search = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          console.log(searchText);
        }}
      />
      <button>Search</button>
      <Details text={searchText} />
    </div>
  );
};

export default Search;
