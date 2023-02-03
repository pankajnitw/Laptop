import React from "react";
import { useState } from "react";

export default function Todo(props) {
  function uppercase() {
    console.log("clicked on uppercase");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert(" Converted to upper case","success")
  }
  function lowercase() {
    console.log("clicked on uppercase");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert(" Converted to lower case","success")
  }
  function textCopy() {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Copy to clipboard","success")
  }

  function Onchange(event) {
    console.log("clicked on uppercase");
    // let newtext=text.toUpperCase();
    setText(event.target.value);
  }

  let extraCount=(word)=>{
    
    // let text = document.getElementById("mybox");
    // console.log(word.value.count)
    if(word===1){
      word=word-1;
      return word
    }
    else{
      return word+1
    }

  }
  const [text, setText] = useState("");

  // setText("newState");
  // if(text===""){
  //     let newtext=0;
  //     setText(newtext)
  // }
  // else{
  //     setText(text)
  // }

  return (
    <>
      <div>
        <div className={`container text-${props.mode==="light"?"dark":"light"}`}>
          <form>
            <div className="form-group">
              <label htmlFor="mybox">Enter Text Here</label>
              <textarea
                className={`form-control bg-${props.mode==="light"?"light":"dark"}  text-${props.mode==="dark"?"light":"dark"}`}
                id="mybox"
                rows="8"
                // placeholder={text}
                value={text}
                onChange={Onchange}
              ></textarea>
            </div>
          </form>
          <button
            type="button"
            className="btn btn-primary my-3 mx-2"
            onClick={uppercase}
          >
            UpperCase
          </button>
          <button
            type="button"
            className="btn btn-secondary my-3 mx-2"
            onClick={lowercase}
          >
            LowerCase
          </button>
          <button
            type="button"
            className="btn btn-secondary my-3 mx-2"
            onClick={textCopy}
          >
            Testcase
          </button>
        </div>
        <div className={`container text-${props.mode==="light"?"dark":"light"}`}>
          <h3>Word Count</h3>
          <p>
            Number of words is {extraCount(text.split(" ").length)} and character is{" "}
            {text.length}
          </p>
          <h3>Live Preview</h3>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
