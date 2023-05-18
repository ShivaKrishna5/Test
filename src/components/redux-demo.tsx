import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
function ReduxDemo({ children }) {
  const location = useLocation();
  console.log("in reduxdemo");

  return (
    <div className="offset-3 col-6">
      <div
        className="p-5 pt-4 mt-5 border"
        style={{
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          backgroundColor: "white",
          borderRadius: "5px",
        }}
      >
        <div className="mb-5">
          <h1 style={{ textAlign: "center" }}>Redux demo</h1>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ReduxDemo;
