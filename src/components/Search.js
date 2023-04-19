import { useEffect, useState } from "react";
import Details from "./Details";
const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [apiFetch, setApiFetch] = useState(false);
  const [data, setData] = useState(null);

  async function getApi() {
    let data = await fetch("https://api.github.com/users/" + searchText);
    const json = await data.json();
    //console.log(json);
    setData(json);

    setApiFetch(true);
  }

  return (
    <div>
      <input
        type="text"
        className="text-black w-5/6 m-8 rounded p-2 text-2xl font-bold"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          //console.log(searchText);
        }}
      />
      <button
        className="hover:border-b-2 hover:border-blue-400 text-white transition-all font-bold text-2xl ease-in"
        onClick={() => getApi()}
      >
        Search
      </button>
      <Details text={searchText} status={apiFetch} data={data} />
    </div>
  );
};

export default Search;
