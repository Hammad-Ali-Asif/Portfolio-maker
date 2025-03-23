import React from "react";
import { Routes, Route } from "react-router-dom";
import DataEntry from "./components/DataEntry";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<DataEntry onSubmit={(data) => console.log("Submitted:", data)} />} />
    </Routes>
  );
};

export default App;
