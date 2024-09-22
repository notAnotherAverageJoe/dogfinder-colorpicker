import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ColorList from "./components/ColorList";
import ColorDetail from "./components/ColorDetail";
import NewColorForm from "./components/NewColorForm";

function App() {
  const [colors, setColors] = useState([
    { name: "red", code: "#FF0000" },
    { name: "blue", code: "#0000FF" },
  ]);

  const addColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route
          path="/colors/:color"
          element={<ColorDetail colors={colors} />}
        />
        <Route
          path="/colors/new"
          element={<NewColorForm addColor={addColor} />}
        />
        {/* Redirect invalid color or url to colors */}
        <Route path="*" element={<Navigate to="/colors" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
