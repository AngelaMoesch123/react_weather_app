import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="San Diego" />
        <footer>
          This project was created by Angela Moesch and is{" "}
          <a
            href="https://github.com/AngelaMoesch123/react_weather_app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          , and hosted on{" "}
          <a
            href="https://incandescent-chaja-ad328d.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
