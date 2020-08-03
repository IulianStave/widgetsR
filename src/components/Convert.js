import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  const KEY = process.env.REACT_APP_KEY;
  const BASE_URL = "https://translation.googleapis.com/language/translate/v2";

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [text]);

  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        BASE_URL,
        {},
        {
          params: {
            q: debouncedText, //q: text,
            target: language.value,
            key: KEY,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedText]); // [language, text]);
  return <div>{translated}</div>;
};

export default Convert;
