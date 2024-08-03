import "./App.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was coded by Denise Garcia and is{" "}
          <a
            href="https://github.com/Denise148/weather-react-app"
            target="_blank"
            rel="noreferrer">
            on GitHub{" "}
          </a>
          and{" "}
          <a
            href="https://app.netlify.com/sites/weather-react-app-she-codes/overview"
            target="_blank"
            rel="noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
