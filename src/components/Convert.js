import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const KEY = process.env.REACT_APP_KEY;
  const BASE_URL = "https://translation.googleapis.com/language/translate/v2";
  useEffect(() => {
    //    console.log(`New language: ${language.label} or text: ${text}`)
    const doTranslation = async () => {
      const { data } = await axios.post(
        BASE_URL,
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: KEY,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
      console.log(translated);
    };
    doTranslation();
  }, [language, text]);
  return <div>{translated}</div>;
};

export default Convert;
