import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { MovieProvider } from "./api/MovieContext"; // Import MovieProvider
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <MovieProvider>
    <HashRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </HashRouter>
  </MovieProvider>
);
