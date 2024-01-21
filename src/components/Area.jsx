import React, { useState, useEffect, useRef } from "react";
import { checkHeading } from "./functionalities/Heading";
import { checkBlockQuote } from "./functionalities/BlockQuote";
import { checkBold } from "./functionalities/Bold";
import { checkStrikethrough } from "./functionalities/Strikethrough";
import { checkItalics } from "./functionalities/Italics";
import { code } from "./functionalities/code";
import { unorderedList } from "./functionalities/UnorderedList";
import { checkHorizontalRule } from "./functionalities/Horizontal";

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
        const scrollPercentage =
          textareaRef.current.scrollTop / textareaRef.current.scrollHeight;
        previewRef.current.scrollTop =
          previewRef.current.scrollHeight * scrollPercentage;
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
    const lines = unorderedList(markdownText).split("\n");

    return lines.map((line, index) => {
      let parsedLine = line;

      if (
        line.startsWith("<li>") ||
        line.startsWith("</ul>") ||
        line.startsWith("<ul>")
      ) {
        return <div key={index} dangerouslySetInnerHTML={{ __html: line }} />;
      }

      const element =
        checkBlockQuote(parsedLine) ||
        checkHeading(parsedLine) ||
        checkHorizontalRule;
      if (element) {
        return React.cloneElement(element, { key: index });
      }

      parsedLine = checkBold(parsedLine);
      parsedLine = checkItalics(parsedLine);
      parsedLine = checkStrikethrough(parsedLine);
      parsedLine = code(parsedLine);

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
