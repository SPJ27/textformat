import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  return ( 
    <>
    <h1>TextFormat</h1>
    <div className="mb-3">
      <label for="exampleFormControlTextarea1" className="form-label"></label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="8"
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button type="button" className="btn btn-success m-2" onClick={()=>setText(text.toUpperCase())}>
        Uppercase
      </button>
      <button type="button" className="btn btn-success m-2" onClick={()=>setText(text.toLowerCase())}>
        Lowercase
      </button>
      <button type="button" className="btn btn-success m-2" onClick={()=>setText('')}>
        Clear Text
      </button>
    </div>
    <p>Characters: {text.length}</p>
    <p>Words: {text.split(" ").length}</p>
    <p>Time: {text.split(" ").length*0.01} min</p>
    </>
  );
}
