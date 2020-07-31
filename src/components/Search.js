import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect( () => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    }
  }, [term]);

  useEffect( () => {
    const BASE_URL = "https://en.wikipedia.org/w/api.php";
    const search = async () => {
      const { data } = await axios.get(BASE_URL, {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    };
    search();
  }, [debouncedTerm]);


  // useEffect(() => {
  //   // run the code anytime the term changes
  //   const BASE_URL = "https://en.wikipedia.org/w/api.php";
  //   const search = async () => {
  //     const { data } = await axios.get(BASE_URL, {
  //       params: {
  //         action: "query",
  //         list: "search",
  //         origin: "*",
  //         format: "json",
  //         srsearch: term,
  //       },
  //     });
  //     setResults(data.query.search);
  //   };

  //   if (term && !results) {
  //     search();
  //   } else {
  //     const timeoutId = setTimeout(() => {
  //       if (term) {
  //         search();
  //       }
  //     }, 800); // until 800 ms goes by the search won't be executed
  //     return () => {
  //       clearTimeout(timeoutId);
  //     };
  //   }
  // }, [term, results.length]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
