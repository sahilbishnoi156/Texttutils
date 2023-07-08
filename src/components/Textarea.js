import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textarea(props) {
  const [text, setText] = useState("Enter your text here");
  const [emailsPara, showEmails] = useState("No E-mails currently");
  const [numberPara, showNumbers] = useState("No Numbers currently");
  const [wordCount, setWordCount] = useState(0);

  const handleUpClick = () => {
    if (text === "") {
      return 0;
    }
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is converted!", "success");
  };
  const handleLoClick = () => {
    if (text === "") {
      return 0;
    }
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text is converted!", "success");
  };
  const handleTextAreaClick = ()=>{
    if (text === "Enter your text here"){
        setText('');
    }
  };
  const extractEmails = () =>{
    let pattern = /[a-z]*@[a-z]*.com/gm;
    let emails = "";
    if (text === "") {
      return 0;
    }
    else if (text.match(pattern) === null) {
      showEmails("No E-mail's Found.")
      props.showAlert("No E-mail's Found", "warning");
      return 0;
    }
    text.match(pattern).forEach(function (ele) {
      emails = emails + ele + " ";
    });
    showEmails(emails);
    props.showAlert("E-mail's has been extracted", "success");

  };
  const extractNumber = () =>{
    let pattern = /((\d{3}|\(\d{3}\))\s\d{3}\s\d{4})|(\d{10})/gm;
    let Number = "";
    if (text === "") {
      return 0;
    }
    else if (text.match(pattern) === null) {
      showNumbers("No Mobile Numbers Found.")
      props.showAlert("No Mobile Numbers Found", "warning");
      return 0;
    }
    text.match(pattern).forEach(function (ele) {
      Number = Number + ele + " ";
    });
    showNumbers(Number);
  };
  const handleOnChange = (event) => {
    let words = event.target.value
    setText(words);
    setWordCount(words.split(" ").filter((ele)=>{return ele.length!==0}).length);
  };
  return (
    <div className={`container text-${props.textMode}`} id="text-area-div">
      <h1 style={{
        fontSize:"1.3rem"
      }}>{props.heading}</h1>
      <div className="my-3">
        <textarea
          className={`form-control bg-${props.mode === "body-secondary"?"white":"secondary"} text-${props.textMode}`}
          value={text}
          onChange={handleOnChange}
          onClick={handleTextAreaClick}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <div className={`d-flex flex-${props.flexDirection}`} >
      <button className="btn btn-primary m-2" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary m-2" onClick={handleLoClick}>
        Convert to lowercase
      </button>
      <button className="btn btn-primary m-2" onClick={extractEmails}>
        Extract Email's
      </button>
      <button className="btn btn-primary m-2" onClick={extractNumber}>
        Extract Number
      </button>
      </div>
      <div className="my-4">
        <h1 style={{
        fontSize:"1.3rem"
      }}>Text Summary :</h1>
        <p>Characters: {text.length} Words: {wordCount}</p>
        <p>Reading time: {0.008*wordCount}</p>
        <h2 style={{
        fontSize:"1.3rem"
      }}>Preview</h2>
        <p className="w-100">{(text === "Enter your text here") ||(text === "")?"Enter text above to see preview.":text}</p>
        <div className="my-3">
        <h2 style={{
        fontSize:"1.3rem"
      }}>Emails:-</h2>
          <p className="w-100">{emailsPara}</p>
        </div>
        <div className="my-3">
        <h2 style={{
        fontSize:"1.3rem"
      }}>Numbers:-</h2>
          <p className="w-100">{numberPara}</p>
        </div>
      </div>
    </div>
  );
}

Textarea.prototype = {
  heading: PropTypes.string,
};
Textarea.defaultProps = {
  heading: "Write your heading here :",
};
