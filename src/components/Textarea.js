import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textarea(props) {
  const [text, setText] = useState("Enter your text here");
  const [emailsPara, showEmails] = useState("No E-mails currently");
  const [numberPara, showNumbers] = useState("No Numbers currently");
  const [wordCount, setWordCount] = useState(0);
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is converted!", "success");
  };
  const handleLoClick = () => {
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
    if (text.match(pattern) === null) {
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
    if (text.match(pattern) === null) {
      showNumbers("No Mobile Numbers Found.")
      props.showAlert("No Mobile Numbers Found", "warning");
      return 0;
    }
    text.match(pattern).forEach(function (ele) {
      Number = Number + ele + " ";
    });
    showNumbers(Number);
    props.showAlert("Numbers has been extracted", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
    let totalWord = event.target.value.split(" ");
    var wC = 0;
    totalWord.forEach(function (ele) {
      if (ele === " ") {
        setWordCount(wC-1);
      }
      wC++;
      console.log(ele);
    })
    setWordCount(wC)
  };
  return (
    <div className={`container text-${props.textMode}`}>
      <h1>{props.heading}</h1>
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
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert to lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={extractEmails}>
        Extract Email's
      </button>
      <button className="btn btn-primary mx-2" onClick={extractNumber}>
        Extract Number
      </button>
      <div className="my-4">
        <h1>Text Summary :</h1>
        <p>Characters: {text.length} Words: {wordCount}</p>
        <p>Reading time: {0.008*text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{(text === "Enter your text here") ||(text === "")?"Enter text above to see preview.":text}</p>
        <div className="my-3">
        <h2>Emails:-</h2>
          <p>{emailsPara}</p>
        </div>
        <div className="my-3">
        <h2>Numbers:-</h2>
          <p>{numberPara}</p>
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
