import React from "react";
import ForRestaurants from "./forRestaurants";
import ForUsers from "./forUsers";

export default function Content() {
  return (
    <div style={{ marginTop: "100px", marginBottom: "50px" }}>
      <ForRestaurants />
      <ForUsers />
    </div>
  );
}
