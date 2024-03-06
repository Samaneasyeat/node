import PropTypes from "prop-types";
import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { GrClear } from "react-icons/gr";
import { MdFindInPage } from "react-icons/md";

export default function Textform(props) {
  const [enterText, setEnterText] = useState("");
  const [fWord, findWord] = useState("");
  const [rWord, replaceWord] = useState("");

  const handleUpClick = () => {
    let newText = enterText.toUpperCase();
    setEnterText(newText);
    props.showAlert("converted to upper case", "success");
  };

  const handleOnChange = (event) => {
    setEnterText(event.target.value);
  };

  const countWords = (text) => {
    const words = text.match(/\b\w+\b/g);
    return words ? words.length : 0;
  };

  const handleLowerClick = () => {
    let lowerText = enterText.toLowerCase();
    setEnterText(lowerText);
    props.showAlert("converted to Lower case", "success");
  };

  const handleClearClick = () => {
    const clearText = "";
    setEnterText(clearText);
    props.showAlert("cleared text", "success");
  };

  const handleReverseClick = () => {
    let newtext = "";
    for (let i = enterText.length - 1; i >= 0; i--) {
      newtext += enterText[i];
    }
    setEnterText(newtext);
  };

  const handleFindChange = (event) => {
    findWord(event.target.value);
  };

  const handleReplaceChange = (event) => {
    replaceWord(event.target.value);
  };

  const handleReplaceClick = () => {
    let newText = enterText.replaceAll(fWord, rWord);
    setEnterText(newText);
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = enterText;
    window.speechSynthesis.speak(msg);
  };

  return (
    <>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          {props.Text}
        </label>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={enterText}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <div className="container d-flex justify-content-between ">
        <button
          type="button"
          className="btn btn-primary "
          onClick={handleUpClick}
        >
          <FaArrowUp />
          Convert to UpperCase
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={handleLowerClick}
        >
          <FaArrowDown />
          Convert to LowerCase
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleClearClick}
        >
          <GrClear />
          Clear Text
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleReverseClick}
        >
          <MdFindInPage />
          Reverse Text
        </button>
        <input
          type="text"
          value={fWord} // Bind the value of the input to the state
          onChange={handleFindChange} // Call the event handler on change
          placeholder="Type something..." // Optional placeholder text
        />
        <input
          type="text"
          value={rWord} // Bind the value of the input to the state
          onChange={handleReplaceChange} // Call the event handler on change
          placeholder="Type something..." // Optional placeholder text
        />
        <button className="btn btn-secondary" onClick={handleReplaceClick}>
          find and replace
        </button>
        <button type="submit" onClick={speak} className="btn btn-warning ">
          Speak
        </button>
      </div>

      <div className="container my-4">
        <p>
          {countWords(enterText)} words and character and {enterText.length}
        </p>
      </div>
    </>
  );
}

Textform.propTypes = {
  Text: PropTypes.string,
  heading: PropTypes.string,
  heading2: PropTypes.string,
};