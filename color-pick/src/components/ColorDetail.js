// ColorDetail.js
import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";

function ColorDetail({ colors }) {
  const { color } = useParams();
  const foundColor = colors.find((c) => c.name === color);

  if (!foundColor) {
    return <Navigate to="/colors" />;
  }

  return (
    <div style={{ backgroundColor: foundColor.code, height: "100vh" }}>
      <h1>This is {foundColor.name}!</h1>
      <p>Isn't it beautiful?</p>
      <Link to="/colors">Go back</Link>
    </div>
  );
}

export default ColorDetail;
