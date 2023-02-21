import React from "react";

export default function About(props) {
  return (
    <div
      className="container my-3"
      style={props.mode === "light" ? { color: "black" } : { color: "white" }}
    >
      <h1>
        About Us
        <br></br>
        <br></br>
      </h1>

      <p>
        <h4>My name is Deepanshu Singh</h4>
        This is my first website I created using <strong> React js </strong>.
        Its basically a website which I created while learning React from{" "}
        <strong>You Tube</strong> channel named <strong>Code with Harry</strong>
        .
      </p>
    </div>
  );
}
