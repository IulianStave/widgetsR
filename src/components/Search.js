import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);
  console.log("Results ", results);
  useEffect(() => {
    // run the code anytime the term changes
    const search = async () => {
      // let response ='';
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };
    search();
  }, [term]);

  return (
    <div>
      <header>Search</header>
      <div className="ui form">
        <div className="field">
          <label htmlFor="enterTerm">Enter Search Term</label>
          <input
            value={term}
            onChange={(event) => {
              setTerm(event.target.value);
            }}
            id="enterTerm"
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
