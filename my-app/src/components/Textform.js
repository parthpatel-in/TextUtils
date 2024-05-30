// in this file props,useState,eventhandle used

import React, { useState } from "react";

export default function Textform(props) {
  const handleupclick = () => {
    console.log("uppercase was click: " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleonchange = (event) => {
    console.log("onchange was clicked:");
    setText(event.target.value);
  };
  const handleloclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const [text, setText] = useState("enter text here");
  // text ="new text"; wrong way to change state
  // setText("new text"); correct way to change state
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          type="button"
          onClick={handleupclick}
          className="btn btn-success "
        >
          convert to uppercase
        </button>
        <button
          type="button"
          onClick={handleloclick}
          className="btn btn-primary mx-3 "
        >
          convert to lowercase
        </button>
        <button
          type="button"
          onClick={handleloclick}
          className="btn btn-primary mx-3 "
        >
          copy to clipboard
        </button>
        <button
          type="button"
          onClick={handleloclick}
          className="btn btn-primary mx-3 "
        >
          download text
        </button>
      </div>
      <div className="container">
        <h1> Your text summary </h1>
        <p>
          {" "}
          {text.split(" ").length} words & {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </>
)}
