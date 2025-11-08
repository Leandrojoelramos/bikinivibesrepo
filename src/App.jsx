import React from "react";
import Router from "./Router/Router.jsx";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { LottieCacheProvider } from "../src/assets/animations/animationsConfig.jsx";
import "./assets/css/Main.css";
import "./assets/css/Reset.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <React.StrictMode>
          <LottieCacheProvider>
            <Router />
          </LottieCacheProvider>
        </React.StrictMode>
      </BrowserRouter>
    </>
  );
}

export default App;
