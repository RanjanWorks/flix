import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { MovieProvider } from "./api/MovieContext"; // Import MovieProvider

createRoot(document.getElementById("root")).render(
  <MovieProvider>
    <HashRouter>
        <App />
    </HashRouter>
  </MovieProvider>
);
