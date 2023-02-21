import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };

  const handleClickTOLo = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClearCllick = () => {
    setText("");
  };

  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("mybox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space has been removed", "success");
  };

  return (
    <div>
      <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
        {props.heading}
      </h1>
      <div className="mb-3">
        <label htmlFor="mybox" className="form-label"></label>
        <textarea
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#042743",
            color: props.mode === "light" ? "black" : "white",
          }}
          className="form-control"
          id="mybox"
          rows="8"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="btn btn btn-primary my-3 mx-2" onClick={handleClick}>
        Convert to uppercase
      </button>
      <button
        className="btn btn btn-primary my-3 mx-2"
        onClick={handleClickTOLo}
      >
        Convert to lowercase
      </button>

      <button
        className="btn btn btn-primary my-3 mx-2"
        onClick={handleClearCllick}
      >
        Clear
      </button>
      <button className="btn btn btn-primary my-3 mx-2" onClick={handleCopy}>
        Copy
      </button>

      <button
        className="btn btn btn-primary my-3 mx-2"
        onClick={handleExtraSpace}
      >
        Clear Space
      </button>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <br></br>
        <h3> Your text summery </h3>
        <p>
          {" "}
          {text.split(" ").length} words and {text.length} characters
        </p>{" "}
        <h4> Minutes required to read </h4>
        {text.split(" ").length * 0.008}
        <br />
        <br></br>
        <h3>Text preview</h3>
        {text}
      </div>
    </div>
  );
}
