import React, { useState, useEffect, useRef } from "react";
import { checkHeading } from "./functionalities/Heading";
import { checkBlockQuote } from "./functionalities/BlockQuote";
import { checkBold } from "./functionalities/Bold";
import { checkStrikethrough } from "./functionalities/Strikethrough";
const Area = () => {
  const textareaRef = useRef < HTMLTextAreaElement > null;

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);
  return (
    <div id="area-sec">
      <div dangerouslySetInnerHTML={{ __html: checkStrikethrough("~~hi~~") }} />
      {/* <textarea
        ref={textareaRef}
        style={{
          width: "300px", // Adjust width as needed
          height: "150px", // Adjust height as needed
          resize: "none", // Prevent resizing of textarea
          overflowY: "auto", // Enable vertical scroll
        }}
      /> */}
    </div>
  );
};

export default Area;
