import React, { useState, useEffect, useRef } from "react";
import {
  checkBlockQuote,
  checkBold,
  checkHeading,
  checkHorizontalRule,
  checkItalics,
  checkStrikethrough,
  code,
  unorderedList,
} from "./functionalities";

const Area = () => {
  const [markdownInput, setMarkdownInput] = useState("");
  const textareaRef = useRef(null);
  const previewRef = useRef(null);

  useEffect(() => {
    const savedMarkdown = localStorage.getItem("markdownInput");
    if (savedMarkdown) {
      setMarkdownInput(savedMarkdown);
    }

    if (textareaRef.current) {
      textareaRef.current.focus();
    }

    const syncScroll = () => {
      if (textareaRef.current && previewRef.current) {
        const textareaScrollPercentage =
          textareaRef.current.scrollTop / textareaRef.current.scrollHeight;
        previewRef.current.scrollTop =
          previewRef.current.scrollHeight * textareaScrollPercentage;
      }
    };

    if (textareaRef.current) {
      textareaRef.current.addEventListener("scroll", syncScroll);
    }

    return () => {
      if (textareaRef.current) {
        textareaRef.current.removeEventListener("scroll", syncScroll);
      }
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("markdownInput", markdownInput);
  }, [markdownInput]);

  const parseMarkdown = (markdownText) => {
    const unorderedListProcessedText = unorderedList(markdownText);
    const lines = unorderedListProcessedText.split("\n");

    return lines.map((line, index) => {
      if (
        line.startsWith("<li>") ||
        line.startsWith("</ul>") ||
        line.startsWith("<ul>")
      ) {
        return <div key={index} dangerouslySetInnerHTML={{ __html: line }} />;
      }

      const element =
        checkHorizontalRule(line) ||
        checkBlockQuote(line) ||
        checkHeading(line);

      if (element) {
        return React.cloneElement(element, { key: index });
      }

      let parsedLine = checkBold(line);
      parsedLine = checkItalics(parsedLine);
      parsedLine = checkStrikethrough(parsedLine);
      parsedLine = code(parsedLine);
      // parsedLine = parseHighlight(parsedLine);
      // parsedLine = parseImages(parsedLine);
      // parsedLine = parseLinks(parsedLine);

      return <p key={index} dangerouslySetInnerHTML={{ __html: parsedLine }} />;
    });
  };
  return (
    <div id="area-sec">
      <div className="editor">
        <textarea
          ref={textareaRef}
          onChange={(e) => {
            setMarkdownInput(e.target.value);
          }}
          value={markdownInput}
          className="text-area"
          placeholder="Write your markdown here..."
        />
      </div>
      <div className="preview-wrap">
        <div className="preview text-area" ref={previewRef}>
          {parseMarkdown(markdownInput)}
        </div>
      </div>
    </div>
  );
};

export default Area;
