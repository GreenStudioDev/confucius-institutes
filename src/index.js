import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { 
  // InstitutesProvider, 
  MapProvider } from "./context";


const root = ReactDOM.createRoot(document.getElementById("root"));




root.render(
  <React.StrictMode>
    {/* <InstitutesProvider> */}
      <MapProvider>
        <App />
      </MapProvider>
    {/* </InstitutesProvider> */}
  </React.StrictMode>
);
