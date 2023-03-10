import React from "react";
import "./App.css";
import FetctchData from "./components/FetchingDataApiExample";

// Define the type for the data we will fetch

function App() {
  const link: string = "https://catfact.ninja/fact";

  return (
    <>
      <FetctchData apiLink={link} />
    </>
  );
}

export default App;
