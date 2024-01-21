import React, { useState, useEffect, useRef } from "react";
import { checkHeading } from "./functionalities/Heading";
import { checkBlockQuote } from "./functionalities/BlockQuote";
import { checkBold } from "./functionalities/Bold";
import { checkStrikethrough } from "./functionalities/Strikethrough";
import { checkItalics } from "./functionalities/Italics";
import { code } from "./functionalities/code";
import { unorderedList } from "./functionalities/UnorderedList";

const Area = () => {
  const [markdownInput, setMarkdownInput] = useState("");

  useEffect(() => {
    const savedMarkdown = localStorage.getItem("markdownInput");
    if (savedMarkdown) {
      setMarkdownInput(savedMarkdown);
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("markdownInput", markdownInput);
  }, [markdownInput]);

  return (
    <div id="area-sec">
      <div className="editor">
        <textarea
          onChange={(e) => {
            setMarkdownInput(e.target.value);
          }}
          value={markdownInput}
          className="text-area"
          placeholder="Write your markdown here..."
        />
      </div>
      <div className="preview">
        <textarea className="text-area"></textarea>
      </div>
    </div>
  );
};

export default Area;
